const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Business, BusinessCategory, Product, Review, Tag } = require('../../db/models');

router.get(
  '/:id',
  asyncHandler(async (req, res, _next) => {
    const { id } = req.params;
    const business = await Business.findByPk(Number(id), {
      include: [
        { model: Review, as: 'reviews' },
        { model: Product, as: 'products' },
        { model: BusinessCategory, as: 'category' },
        { model: Tag, as: 'tags' },
      ],
    });
    if(!business) return res.out.badRequest400('Bad Request');
    return res.out.ok200('Success', business);
  })
);

module.exports = router;
