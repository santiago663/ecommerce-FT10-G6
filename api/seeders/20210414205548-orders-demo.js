'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("orders", [
      {
        id: 1,
        date: new Date(),
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        id: 2,
        date: new Date(),
        total: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        id: 3,
        date: new Date(),
        total: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("orders", null, {});
  }
};
