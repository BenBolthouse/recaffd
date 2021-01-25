'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('reviews', {
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
        rating: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        body: {
          allowNull: true,
          defaultValue: null,
          type: Sequelize.TEXT,
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
        return queryInterface.createTable('business_reviews', {
          businessId: {
            allowNull: false,
            onDelete: 'CASCADE',
            primaryKey: true,
            references: { model: 'businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          reviewId: {
            allowNull: false,
            onDelete: 'CASCADE',
            primaryKey: true,
            references: { model: 'reviews', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('product_reviews', {
          productId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          reviewId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'reviews', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .dropTable('business_reviews')
      .then(() => {
        return queryInterface.dropTable('product_reviews');
      })
      .then(() => {
        return queryInterface.dropTable('reviews');
      });
  },
};
