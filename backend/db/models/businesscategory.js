'use strict';

module.exports = (sequelize, DataTypes) => {
  const BusinessCategory = sequelize.define(
    'BusinessCategory',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  return BusinessCategory;
};
