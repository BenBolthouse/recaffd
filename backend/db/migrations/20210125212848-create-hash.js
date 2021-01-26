'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Hashes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        hash: {
          allowNull: false,
          type: Sequelize.STRING(60),
        },
        type: {
          allowNull: true,
          defaultValue: null,
          type: Sequelize.STRING(20),
        },
        expiresAt: {
          allowNull: true,
          defaultValue: Sequelize.literal("now() + interval '15 minute'"),
          type: Sequelize.DATE,
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
        return queryInterface.createTable('UserHashes', {
          userId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Users', key: 'id' },
            type: Sequelize.INTEGER,
          },
          hashId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Hashes', key: 'id' },
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
    return queryInterface.dropTable('UserHashes').then(() => {
      return queryInterface.dropTable('Hashes');
    });
  },
};
