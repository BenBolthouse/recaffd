'use strict';

module.exports = (sequelize, DataTypes) => {
  const BusinessCategories = sequelize.define(
    'BusinessCategories',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  return BusinessCategories;
};
