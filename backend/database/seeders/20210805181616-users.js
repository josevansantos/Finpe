'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Manolo Maneiro',
          email: 'super@email.com',
          password: await bcrypt.hash('admin', 8),
          isAdmin: 1,
        },
        {
          name: 'Jao Bacana',
          email: 'jao@email.com',
          password: await bcrypt.hash('123', 8),
          isAdmin: 0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
