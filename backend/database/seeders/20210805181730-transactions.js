'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'transactions',
      [
        {
          description: 'Salário',
          amount: 1500,
          type: 'income',
          userId: 1,
        },
        {
          description: 'Salário',
          amount: 50000,
          type: 'income',
          userId: 2,
        },
        {
          description: 'Cinema',
          amount: 6000,
          type: 'expense',
          userId: 1,
        },
        {
          description: 'Cinema',
          amount: 4000,
          type: 'expense',
          userId: 2,
        },
        {
          description: 'Supermercado',
          amount: 6000,
          type: 'expense',
          userId: 1,
        },
        {
          description: 'Supermercado',
          amount: 3000,
          type: 'expense',
          userId: 2,
        },
        {
          description: 'FreeLance',
          amount: 12000,
          type: 'income',
          userId: 1,
        },
        {
          description: 'FreeLance',
          amount: 9000,
          type: 'income',
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
