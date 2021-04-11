"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      { id: 1, name: "Black and White" },
      { id: 2, name: "Portrait" },
      { id: 3, name: "Color" },
      { id: 4, name: "Ilustration" },
      { id: 5, name: "Abstract" },
      { id: 6, name: "Nature" },
      { id: 7, name: "Animals" },
      { id: 8, name: "Psikodelic" },
      { id: 9, name: "Subrealist" },
      { id: 10, name: "Hyper-realist" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
