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
    let order;

    // Request query parameters
    let {
      offset,
      limit,
      sortedBy,
      includeProducts,
      includeBusinesses,
      includeFavorites,
      includeCheckIns,
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
      case 'NAME_ASC':
        order = [['name', 'ASC']];
        break;
      case 'NAME_DESC':
        order = [['name', 'DESC']];
        break;
      case 'RATING_ASC':
        order = [['rating', 'ASC'], ['name', 'ASC']];
        break;
      case 'RATING_DESC':
        order = [['rating', 'DESC'], ['name', 'ASC']];
        break;
      default:
        order = [['name', 'ASC']];
    }

    // Get the data by sort order
    feedBusinesses = await Business.findAndCountAll({
      offset,
      limit,
      order: order,
      include: { model: Tag, as: 'tags' },
    });
    feedProducts = await Product.findAndCountAll({
      offset,
      limit,
      order: order,
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
            inCollection: true,
            collectionId: defaultCollectionId,
          };
        else feedDataItem.dataValues[defaultCollectionName] = {
          inCollection: false,
          collectionId: defaultCollectionId,
        };
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
    }

    const out = {
      offset: Number(offset) || 0,
      limit: Number(limit) || 20,
      sortedBy: sortedBy || 'NAME_A_Z',
      includeProducts: Boolean(includeProducts) || true,
      includeBusinesses: Boolean(includeBusinesses) || false,
      includeFavorites: Boolean(includeFavorites) || false,
      includeCheckIns: Boolean(includeCheckIns) || false,
      feedItems: []
    };

    if (includeProducts) out.feedItems.push(...feedProducts.rows);
    if (includeBusinesses) out.feedItems.push(...feedBusinesses.rows);

    return res.out.ok200('Success', out);
  })
);

module.exports = router;
