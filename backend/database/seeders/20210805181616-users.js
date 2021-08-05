'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Manolo Maneiro',
          email: 'super@email.com',
          password: 'admin',
          isAdmin: 1,
        },
        {
          name: 'Jao Bacana',
          email: 'jao@email.com',
          password: '123',
          isAdmin: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
