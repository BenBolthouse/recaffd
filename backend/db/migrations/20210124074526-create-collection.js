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
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
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
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('business_collections').then(() => {
      return queryInterface.dropTable('collections');
    });
  },
};
