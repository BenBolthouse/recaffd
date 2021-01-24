'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'roles',
      [
        { name: 'USER' },
        { name: 'BUSINESS_OWNER' },
        { name: 'ADMINISTRATOR' },
        { name: 'DEMO_USER' },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE roles_id_seq RESTART WITH 1;');
    return queryInterface.bulkDelete('roles', null, {});
  },
};
