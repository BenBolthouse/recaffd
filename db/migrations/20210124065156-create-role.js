'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Roles', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(20),
        },
        description: {
          allowNull: true,
          defaultValue: null,
          type: Sequelize.STRING(255),
        },
        createdAt: {
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        return queryInterface.createTable('UserRoles', {
          userId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Users', key: 'id' },
            type: Sequelize.INTEGER,
          },
          roleId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Roles', key: 'id' },
            type: Sequelize.INTEGER,
          },
          createdAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRoles').then(() => {
      return queryInterface.dropTable('Roles');
    });
  },
};
