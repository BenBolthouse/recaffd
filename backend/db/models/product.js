'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      businessId: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([a-zA-Z0-9\ \-]){1,50}$/,
            msg: 'Name must only contain letters, numbers, hyphens and spaces.',
          },
          len: {
            args: [1, 50],
            msg: 'Name must be between 1 and 50 characters in length.',
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [1, 200],
            msg: 'Description must be between 1 and 200 characters in length.',
          },
        },
      },
      rating: DataTypes.FLOAT,
      ratingCeiling: DataTypes.FLOAT,
    },
    {}
  );
  Product.associate = function (models) {
    Product.belongsTo(models.Business, { foreignKey: 'businessId' });
    Product.belongsToMany(models.Review, {
      through: 'product_reviews',
      otherKey: 'reviewId',
      foreignKey: 'productId',
      as: 'reviews',
    });
    Product.belongsToMany(models.Tag, {
      through: 'product_tags',
      otherKey: 'tagId',
      foreignKey: 'productId',
      as: 'tags',
    });
  };
  return Product;
};
