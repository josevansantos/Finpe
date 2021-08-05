'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'transactions',
      [
        {
          description: 'Salário',
          value: 1500,
          type: 'incoming',
          userId: 1,
        },
        {
          description: 'Salário',
          value: 50000,
          type: 'incoming',
          userId: 2,
        },
        {
          description: 'Cinema',
          value: 6000,
          type: 'expends',
          userId: 1,
        },
        {
          description: 'Cinema',
          value: 4000,
          type: 'expends',
          userId: 2,
        },
        {
          description: 'Supermercado',
          value: 6000,
          type: 'expends',
          userId: 1,
        },
        {
          description: 'Supermercado',
          value: 3000,
          type: 'expends',
          userId: 2,
        },
        {
          description: 'FreeLance',
          value: 12000,
          type: 'incoming',
          userId: 1,
        },
        {
          description: 'FreeLance',
          value: 9000,
          type: 'incoming',
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};
