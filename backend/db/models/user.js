'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Business, { foreignKey: 'userId', as: 'businesses' });
    User.hasMany(models.Review, { foreignKey: 'userId', as: 'reviews' });
    User.hasMany(models.Collection, { foreignKey: 'userId', as: 'collections' });
    User.belongsToMany(models.Role, {
      through: 'UserRoles',
      otherKey: 'roleId',
      foreignKey: 'userId',
      as: 'roles',
    });
    User.belongsToMany(models.Hash, {
      through: 'UserHashes',
      otherKey: 'hashId',
      foreignKey: 'userId',
      as: 'hashes',
    });
  };
  /**
   * Verify a password and return the verified user, or otherwise return false.
   * @param {Password string} password 
   */
  User.prototype.signIn = async function (password) {
    const hash = this.hashes[0].hash;
    const compares = await bcrypt.compare(password, hash);
    if (!compares) return false;
    else return this;
  }
  /**
   * Scoped user data for use on the authorization token.
   */
  User.prototype.scopedToken = function () {
    return {
      id: this.id,
      username: this.username,
      emailAddress: this.emailAddress,
      roles: this.roles,
    };
  };
  /**
   * Scoped user data without any sensitive data.
   */
  User.prototype.scopedDefault = function () {
    return {
      id: this.id,
      username: this.username,
      emailAddress: this.emailAddress,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
  return User;
};
