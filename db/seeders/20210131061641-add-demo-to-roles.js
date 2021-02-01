'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          userId: 501,
          roleId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, { where: { userId: 501 } });
  },
};
