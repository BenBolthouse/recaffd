'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('business_categories', {
      name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(20),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('business_categories');
  },
};
