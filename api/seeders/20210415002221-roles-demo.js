"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("roles", [
      { id: 1, description: "Admin" },
      { id: 2, description: "Registered" },
      { id: 3, description: "Guess" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("roles", null, {});
  },
};
