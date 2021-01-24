'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      userId: DataTypes.UUID,
      associationId: DataTypes.UUID,
      rating: {
        type: DataTypes.NUMBER,
        validate: {
          min: {
            args: 1,
            msg: 'Rating must be a number from 1 to 5.',
          },
          max: {
            args: 5,
            msg: 'Rating must be a number from 1 to 5.',
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 100],
            msg: 'Title must be between 5 and 100 characters in length',
          },
        },
      },
      body: DataTypes.STRING,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsToMany(models.Business, {
      through: 'business_reviews',
      otherKey: 'businessId',
      foreignKey: 'reviewId',
      as: 'businesses',
    });
    Review.belongsToMany(models.Product, {
      through: 'product_reviews',
      otherKey: 'productId',
      foreignKey: 'reviewId',
      as: 'products',
    });
  };
  return Review;
};
