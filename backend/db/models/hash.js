'use strict';

module.exports = (sequelize, DataTypes) => {
  const Hash = sequelize.define(
    'Hash',
    {
      hash: DataTypes.STRING,
      type: DataTypes.STRING,
      expiresAt: DataTypes.DATE,
    },
    {}
  );
  return Hash;
};
