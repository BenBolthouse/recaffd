'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'Users',
        [
          {
            username: 'demouser2021',
            firstName: 'Demo',
            lastName: 'User',
            emailAddress: 'demo@user.com',
          },
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          'Hashes',
          [
            {
              hash: bcrypt.hashSync('Password2021$', 10),
              type: 'PASSWORD',
            },
          ],
          {}
        );
      })
      .then(() => {
        return queryInterface.bulkInsert(
          'UserHashes',
          [
            {
              userId: 501,
              hashId: 1,
            },
          ],
          {}
        );
      })
      .then(() => {
        return queryInterface.bulkInsert(
          'Collections',
          [
            {
              userId: 501,
              name: 'favorites',
            },
            {
              userId: 501,
              name: 'checkins',
            },
          ],
          {}
        );
      })
      .then(() => {
        return queryInterface.bulkInsert(
          'BusinessCollections',
          [
            {
              businessId: 1,
              collectionId: 1,
            },
            {
              businessId: 2,
              collectionId: 1,
            },
            {
              businessId: 3,
              collectionId: 1,
            },
            {
              businessId: 4,
              collectionId: 1,
            },
            {
              businessId: 22,
              collectionId: 2,
            },
            {
              businessId: 23,
              collectionId: 2,
            },
          ],
          {}
        );
      })
      .then(() => {
        return queryInterface.bulkInsert(
          'ProductCollections',
          [
            {
              productId: 1,
              collectionId: 1,
            },
            {
              productId: 2,
              collectionId: 1,
            },
            {
              productId: 3,
              collectionId: 1,
            },
            {
              productId: 4,
              collectionId: 1,
            },
            {
              productId: 98,
              collectionId: 1,
            },
            {
              productId: 99,
              collectionId: 1,
            },
            {
              productId: 100,
              collectionId: 1,
            },
          ],
          {}
        );
      });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 501;');
    return queryInterface.bulkDelete('Users', null, { where: { id: 501 } }).then(() => {
      return queryInterface.bulkDelete('Hashes', null, {}).then(() => {
        queryInterface.sequelize.query('ALTER SEQUENCE "Hashes_id_seq" RESTART WITH 1;');
        queryInterface.sequelize.query('ALTER SEQUENCE "Collections_id_seq" RESTART WITH 1;');
      });
    });
  },
};
