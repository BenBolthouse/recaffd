'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'BusinessCategories',
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
    return queryInterface.bulkDelete('BusinessCategories', null, {});
  },
};
