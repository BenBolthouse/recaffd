'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('tags', {
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
        return queryInterface.createTable('business_tags', {
          businessId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'businesses', key: 'id' },
            type: Sequelize.INTEGER,
          },
          tagId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'tags', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('product_tags', {
          productId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'products', key: 'id' },
            type: Sequelize.INTEGER,
          },
          tagId: {
            allowNull: false,
            onDelete: 'CASCADE',
            references: { model: 'tags', key: 'id' },
            type: Sequelize.INTEGER,
          },
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .dropTable('business_tags')
      .then(() => {
        return queryInterface.dropTable('product_tags');
      })
      .then(() => {
        return queryInterface.dropTable('tags');
      });
  },
};
