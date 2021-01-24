'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('roles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(20),
        },
      })
      .then(() => {
        return queryInterface.createTable('user_roles', {
          userId: {
            allowNull: false,
            onDelete: 'CASCADE',
            primaryKey: true,
            references: { model: 'users', key: 'id' },
            type: Sequelize.INTEGER,
          },
          roleId: {
            allowNull: false,
            onDelete: 'CASCADE',
            primaryKey: true,
            references: { model: 'roles', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_roles').then(() => {
      return queryInterface.dropTable('roles');
    });
  },
};
