'use strict';

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    'Business',
    {
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      latitude: DataTypes.NUMBER,
      longitude: DataTypes.NUMBER,
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
            args: [1, 1000],
            msg: 'Name must be between 1 and 1000 characters in length.',
          },
        },
      },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([A-Z]){2,}$/,
            msg: 'State must be two characters long, such as AZ, WA or MI.',
          },
        },
      },
      zip: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([0-9]){5,}$/,
            msg: 'Zip code must be five digits and can only contain numbers.',
          },
        },
      },
      establishedAt: DataTypes.DATE,
      closedAt: DataTypes.DATE,
      rating: DataTypes.NUMBER,
      ratingCeiling: DataTypes.NUMBER,
    },
    {}
  );
  Business.associate = function (models) {
    Business.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Business.belongsTo(models.BusinessCategory, { foreignKey: 'categoryId', as: 'category' });
    Business.hasMany(models.Product, { foreignKey: 'id', as: 'products' });
    Business.belongsToMany(models.Review, {
      through: 'BusinessReviews',
      otherKey: 'reviewId',
      foreignKey: 'businessId',
      as: 'reviews',
    });
    Business.belongsToMany(models.Tag, {
      through: 'BusinessTags',
      otherKey: 'tagId',
      foreignKey: 'businessId',
      as: 'tags',
    });
  };
  return Business;
};
