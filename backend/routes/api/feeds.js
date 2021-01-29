const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Business, Collection, Product, User, Tag } = require('../../db/models');
const { restoreUser } = require('./auth');

/**
 * * =================
 * *  GET /api/feeds
 * * =================
 */
router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res, next) => {
    // Scoped variables
    let user;
    let feedBusinesses;
    let feedProducts;

    // Request query parameters
    let {
      offset,
      limit,
      sortedBy,
      includeProducts,
      includeBusinesses,
    } = req.query;

    // Get the session user with collections
    try {
      user = !req.user
        ? null
        : await User.findByPk(req.user.id, {
            include: {
              model: Collection,
              as: 'collections',
              include: [
                { model: Business, as: 'businesses' },
                { model: Product, as: 'products' },
              ],
            },
          });
    } catch (e) {
      res.out.serverError500('User Lookup', 'There was an error', null, e.stack);
    }

    // Set the sort array based on the requested sort
    switch (sortedBy) {
      case 'nameAlphabeticalDesc':
        sortedBy = ['name', 'ASC'];
      case 'nameAlphabeticalAsc':
        sortedBy = ['name', 'DESC'];
      case 'createdAtDateDesc':
        sortedBy = ['createdAt', 'ASC'];
      case 'createdAtDateAsc':
        sortedBy = ['createdAt', 'DESC'];
      case 'ratingDesc':
        sortedBy = ['rating', 'ASC'];
      case 'ratingAsc':
        sortedBy = ['rating', 'DESC'];
      default:
        sortedBy = ['name', 'ASC'];
    }

    // Get the data by sort order
    feedBusinesses = await Business.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']],
      // order: [sortedBy],
      include: { model: Tag, as: 'tags' },
    });
    feedProducts = await Product.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']],
      // order: [sortedBy],
      include: { model: Tag, as: 'tags' },
    });

    const flagInDefaultCollection = ({
      defaultCollectionId,
      defaultCollectionName,
      defaultCollectionData,
      feedData,
    }) => {
      let defCollectionDataIds = [];
      for (const i in defaultCollectionData) {
        defCollectionDataIds.push(defaultCollectionData[i].id);
      }
      for (i = 0; i < feedData.length; i++) {
        const feedDataItem = feedData[i];
        if (defCollectionDataIds.includes(feedDataItem.id))
          feedDataItem.dataValues[defaultCollectionName] = {
            collectionId: defaultCollectionId
          };
        else feedDataItem.dataValues[defaultCollectionName] = false;
      }
    };

    if (user) {
      let favoritesCollection = user.collections.find(c => c.name === 'favorites');
      let checkinsCollection = user.collections.find(c => c.name === 'checkins');
      
      flagInDefaultCollection({
        defaultCollectionId: favoritesCollection.id,
        defaultCollectionName: favoritesCollection.name,
        defaultCollectionData: favoritesCollection.businesses,
        feedData: feedBusinesses.rows,
      });
      flagInDefaultCollection({
        defaultCollectionId: favoritesCollection.id,
        defaultCollectionName: favoritesCollection.name,
        defaultCollectionData: favoritesCollection.products,
        feedData: feedProducts.rows,
      });
      flagInDefaultCollection({
        defaultCollectionId: checkinsCollection.id,
        defaultCollectionName: checkinsCollection.name,
        defaultCollectionData: checkinsCollection.businesses,
        feedData: feedBusinesses.rows,
      });
      // flagInDefaultCollection(products, feedProducts.rows, 'favoritesCollectionId');
      // flagInDefaultCollection(checkins, feedBusinesses.rows, 'checkinsCollectionId');
    }

    const out = [];

    if (includeProducts) out.push(...feedBusinesses.rows);
    if (includeBusinesses) out.push(...feedProducts.rows);

    return res.out.ok200('Success', out);
  })
);

module.exports = router;
