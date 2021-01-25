'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessType = sequelize.define(
    'BusinessCategory',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  BusinessType.associate = function (models) {
    BusinessType.hasMany(models.Business, { foreignKey: 'categoryName', as: 'businesses' });
  };
  return BusinessType;
};
