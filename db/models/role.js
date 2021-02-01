'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Role.associate = function (models) {
    Role.belongsToMany(models.Role, {
      through: 'UserRoles',
      otherKey: 'userId',
      foreignKey: 'roleId',
      as: 'users',
    });
  };
  return Role;
};
