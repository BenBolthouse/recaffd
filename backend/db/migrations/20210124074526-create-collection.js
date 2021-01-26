'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Collections', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          onDelete: 'CASCADE',
          references: { model: 'Users', key: 'id' },
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(50),
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
        return queryInterface.createTable('BusinessCollections', {
          businessId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'Businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          collectionId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'Collections', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('ProductCollections', {
          productId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'Products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          collectionId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'Collections', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .dropTable('BusinessCollections')
      .then(() => {
        return queryInterface.dropTable('ProductCollections');
      })
      .then(() => {
        return queryInterface.dropTable('Collections');
      });
  },
};
