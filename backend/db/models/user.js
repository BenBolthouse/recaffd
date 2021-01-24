'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          is: {
            args: /^([a-zA-Z0-9])*$/,
            msg: 'Username can only contain letters and numbers and cannot have whitespace.',
          },
          len: {
            args: [5, 20],
            msg: 'Username must be between 5 and 20 characters in length.',
          },
        },
      },
      emailAddress: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: 'Email address must be valid.',
          },
          len: {
            args: [5, 100],
            msg: 'Email must be between 5 and 100 characters in length.',
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([a-zA-Z\-\'\`]){1,50}$/,
            msg: 'First name can only contain letters, apostrophes, back ticks and hyphens.',
          },
          len: {
            args: [1, 50],
            msg: 'First name must be between 1 and 50 characters in length.',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^([a-zA-Z\-\'\`]){1,50}$/,
            msg: 'Last name can only contain letters, apostrophes, back ticks and hyphens.',
          },
          len: {
            args: [1, 50],
            msg: 'Last name must be between 1 and 50 characters in length.',
          },
        },
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Business, { foreignKey: 'ownerUserId', as: 'businesses' });
    User.hasMany(models.Review, { foreignKey: 'userId', as: 'reviews' });
    User.hasMany(models.Collection, { foreignKey: 'userId', as: 'collections' });
    User.belongsToMany(models.Role, {
      through: 'role_models',
      otherKey: 'roleId',
      foreignKey: 'userId',
      as: 'roles',
    });
  };
  return User;
};
