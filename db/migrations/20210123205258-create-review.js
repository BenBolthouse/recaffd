'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Reviews', {
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
        return queryInterface.createTable('BusinessReviews', {
          businessId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          reviewId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Reviews', key: 'id' },
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
      })
      .then(() => {
        return queryInterface.createTable('ProductReviews', {
          productId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          reviewId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Reviews', key: 'id' },
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
    return queryInterface
      .dropTable('BusinessReviews')
      .then(() => {
        return queryInterface.dropTable('ProductReviews');
      })
      .then(() => {
        return queryInterface.dropTable('Reviews');
      });
  },
};
