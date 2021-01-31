const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Collection } = require('../../db/models');

const { inUserRole, restoreUser } = require('../../utils/auth');

router.patch(
  '/favorites',
  restoreUser,
  inUserRole,
  asyncHandler(async (req, res, _next) => {
    const { itemId, itemType, collectionId } = req.body;

    const collection = await Collection.findByPk(collectionId);

    if (!collection) return res.out.notFound404('Not Found', null, { complete: false });
    
    if (itemType === 'product') {
      const result = await collection.addProduct(itemId);
      if (!result) return res.out.notFound404('Not Found', null, { complete: false });
    }
    if (itemType === 'business') {
      const result = await collection.addBusiness(itemId);
      if (!result) return res.out.notFound404('Not Found', null, { complete: false });
    }

    return res.out.ok200('Success', { complete: true });
  })
);

router.delete(
  '/favorites',
  restoreUser,
  inUserRole,
  asyncHandler(async (req, res, _next) => {
    const { itemId, itemType, collectionId } = req.body;

    const collection = await Collection.findByPk(collectionId);

    if (!collection) return res.out.notFound404('Not Found', null, { complete: false });
    
    if (itemType === 'product') {
      const result = await collection.removeProduct(itemId);
      if (!result) return res.out.notFound404('Not Found', null, { complete: false });
    }
    if (itemType === 'business') {
      const result = await collection.removeBusiness(itemId);
      if (!result) return res.out.notFound404('Not Found', null, { complete: false });
    }

    res.out.ok200('Success', { complete: true });
  })
);

module.exports = router;
