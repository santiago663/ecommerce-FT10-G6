"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      { name: "Black and White" },
      { name: "Portrait" },
      { name: "Color" },
      { name: "Ilustration" },
      { name: "Abstract" },
      { name: "Nature" },
      { name: "Animals" },
      { name: "Psikodelic" },
      { name: "Subrealist" },
      { name: "Hyper-realist" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
