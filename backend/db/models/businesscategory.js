'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessType = sequelize.define(
    'BusinessCategory',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  BusinessType.associate = function (models) {
    // associations can be defined here
  };
  return BusinessType;
};
