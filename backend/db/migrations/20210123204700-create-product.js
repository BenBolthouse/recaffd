'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      businessId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'businesses', key: 'id' },
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: false,
        defaultValue: 'No description',
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('products');
  },
};
