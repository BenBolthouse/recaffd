'use strict';

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    'Collection',
    {
      userId: DataTypes.INTEGER,
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
  Collection.associate = function (models) {
    Collection.belongsTo(models.User, { foreignKey: 'userId' });
    Collection.belongsToMany(models.Product, {
      through: 'ProductCollections',
      otherKey: 'productId',
      foreignKey: 'collectionId',
      as: 'products',
    });
    Collection.belongsToMany(models.Business, {
      through: 'BusinessCollections',
      otherKey: 'businessId',
      foreignKey: 'collectionId',
      as: 'businesses',
    });
  };
  return Collection;
};
