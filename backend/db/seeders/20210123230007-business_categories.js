'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'business_categories',
      [
        { name: 'Coffee Stand' },
        { name: 'Coffee Bar' },
        { name: 'Coffee Shop' },
        { name: 'Cafe' },
        { name: 'Restaurant' },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE business_categories_id_seq RESTART WITH 1;');
    return queryInterface.bulkDelete('business_categories', null, {});
  },
};
