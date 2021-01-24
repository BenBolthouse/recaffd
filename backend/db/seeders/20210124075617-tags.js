'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tags',
      [
        { name: 'Loud' },
        { name: 'Upbeat' },
        { name: 'City' },
        { name: 'Rural' },
        { name: 'Quiet' },
        { name: 'Quaint' },
        { name: 'Suburban' },
        { name: 'Kid Friendly' },
        { name: 'Pet Friendly' },
        { name: 'Good Value' },
        { name: 'Pricy' },
        { name: 'Exotic' },
        { name: 'Trendy' },
        { name: 'Cyclist Spot' },
        { name: 'Skate' },
        { name: 'Artistic' },
        { name: 'Serves Alcohol' },
        { name: 'Serves Food' },
        { name: 'Serves Pastries' },
        { name: 'Serves Desserts' },
        { name: 'Catering' },
        { name: 'Parties' },
        { name: 'Business' },
        { name: 'Roomy' },
        { name: 'Environmental' },
        { name: 'Formal' },
        { name: 'Laid Back' },
        { name: 'Interesting' },
        { name: 'Intriguing' },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE tags_id_seq RESTART WITH 1;');
    return queryInterface.bulkDelete('tags', null, {});
  },
};
