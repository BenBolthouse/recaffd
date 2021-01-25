'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('businesses', {
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
      categoryName: {
        allowNull: false,
        defaultValue: 'No Category',
        onDelete: 'CASCADE',
        references: { model: 'business_categories', key: 'id' },
        type: Sequelize.INTEGER,
      },
      latitude: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      longitude: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: false,
        defaultValue: 'No description provided',
        type: Sequelize.TEXT,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
      zip: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      establishedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE,
      },
      closedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
      },
      rating: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.FLOAT,
      },
      ratingCeiling: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('businesses');
  },
};
