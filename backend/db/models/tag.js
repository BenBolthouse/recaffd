'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([a-zA-Z0-9\ \-]){1,20}$/,
            msg: 'Name must only contain letters, numbers, hyphens and spaces.',
          },
          len: {
            args: [1, 20],
            msg: 'Name must be between 1 and 20 characters in length.',
          },
        },
      },
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Business, {
      through: 'business_tags',
      otherKey: 'businessId',
      foreignKey: 'tagId',
      as: 'businesses',
    });
    Tag.belongsToMany(models.Product, {
      through: 'product_tags',
      otherKey: 'productId',
      foreignKey: 'tagId',
      as: 'products',
    });
  };
  return Tag;
};
