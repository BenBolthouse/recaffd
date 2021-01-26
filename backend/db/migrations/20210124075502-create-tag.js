'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Tags', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(20),
          unique: true,
        },
      })
      .then(() => {
        return queryInterface.createTable('BusinessTags', {
          businessId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          tagId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Tags', key: 'id' },
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
        return queryInterface.createTable('ProductTags', {
          productId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          tagId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'Tags', key: 'id' },
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
      .dropTable('BusinessTags')
      .then(() => {
        return queryInterface.dropTable('ProductTags');
      })
      .then(() => {
        return queryInterface.dropTable('Tags');
      });
  },
};
