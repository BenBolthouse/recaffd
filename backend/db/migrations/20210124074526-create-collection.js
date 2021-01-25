'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('collections', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          onDelete: 'CASCADE',
          references: { model: 'users', key: 'id' },
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
        return queryInterface.createTable('business_collections', {
          businessId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          collectionId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'collections', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('product_collections', {
          productId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          collectionId: {
            allowNull: false,
            primaryKey: true,
            onDelete: 'CASCADE',
            references: { model: 'collections', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .dropTable('business_collections')
      .then(() => {
        return queryInterface.dropTable('product_collections');
      })
      .then(() => {
        return queryInterface.dropTable('collections');
      });
  },
};
