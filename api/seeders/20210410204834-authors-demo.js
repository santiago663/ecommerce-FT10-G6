"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("authors", [
      {
        name: "Sam Gilliam",
        email: "henry01@ecommerce.com",
      },
      {
        name: "Mary Lovelace O'Neal",
        email: "henry02@ecommerce.com",
      },
      {
        name: "Jon Spencer",
        email: "henry03@ecommerce.com",
      },
      {
        name: "Israel Rodriguez",
        email: "henry04@ecommerce.com",
      },
      {
        name: "Federico Salguero",
        email: "henry05@ecommerce.com",
      },
      {
        name: "Martin Inca",
        email: "henry06@ecommerce.com",
      },
      {
        name: "Gustavo Etcheverri",
        email: "henry07@ecommerce.com",
      },
      {
        name: "Maria Antonieta de las Nieves",
        email: "henry08@ecommerce.com",
      },
      {
        name: "Señór Barriga",
        email: "henry09@ecommerce.com",
      },
      {
        name: "Cristina Fernandez",
        email: "henry10@ecommerce.com",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("authors", null, {});
  },
};

