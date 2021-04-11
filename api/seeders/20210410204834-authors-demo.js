"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("authors", [
      {
        id: 1,
        name: "Sam Gilliam",
        email: "henry01@ecommerce.com",
      },
      {
        id: 2,
        name: "Mary Lovelace O'Neal",
        email: "henry02@ecommerce.com",
      },
      {
        id: 3,
        name: "Jon Spencer",
        email: "henry03@ecommerce.com",
      },
      {
        id: 4,
        name: "Israel Rodriguez",
        email: "henry04@ecommerce.com",
      },
      {
        id: 5,
        name: "Federico Salguero",
        email: "henry05@ecommerce.com",
      },
      {
        id: 6,
        name: "Martin Inca",
        email: "henry06@ecommerce.com",
      },
      {
        id: 7,
        name: "Gustavo Etcheverri",
        email: "henry07@ecommerce.com",
      },
      {
        id: 8,
        name: "Maria Antonieta de las Nieves",
        email: "henry08@ecommerce.com",
      },
      {
        id: 9,
        name: "Señór Barriga",
        email: "henry09@ecommerce.com",
      },
      {
        id: 10,
        name: "Cristina Fernandez",
        email: "henry10@ecommerce.com",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("authors", null, {});
  },
};

