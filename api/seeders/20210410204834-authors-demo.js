"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("authors", [
      {
        id: 100,
        name: "Sam Gilliam",
        email: "henry01@ecommerce.com",
        available: true,
      },
      {
        id: 101,
        name: "Mary Lovelace O'Neal",
        email: "henry02@ecommerce.com",
        available: true,
      },
      {
        id: 102,
        name: "Jon Spencer",
        email: "henry03@ecommerce.com",
        available: true,
      },
      {
        id: 103,
        name: "Israel Rodriguez",
        email: "henry04@ecommerce.com",
        available: true,
      },
      {
        id: 104,
        name: "Federico Salguero",
        email: "henry05@ecommerce.com",
        available: true,
      },
      {
        id: 105,
        name: "Martin Inca",
        email: "henry06@ecommerce.com",
        available: true,
      },
      {
        id: 106,
        name: "Gustavo Etcheverri",
        email: "henry07@ecommerce.com",
        available: true,
      },
      {
        id: 107,
        name: "Maria Antonieta de las Nieves",
        email: "henry08@ecommerce.com",
      },
      {
        id: 108,
        name: "Señór Barriga",
        email: "henry09@ecommerce.com",
        available: true,
      },
      {
        id: 109,
        name: "Cristina Fernandez",
        email: "henry10@ecommerce.com",
        available: true,
      },
      {
        id: 110,
        name: "Felipe San Pedro",
        email: "henry011@ecommerce.com",
        available: true,
      },
      {
        id: 111,
        name: "Oscar Carballo Corcino",
        email: "henry12@ecommerce.com",
        available: true,
      },
      {
        id: 112,
        name: "Alicia Imas",
        email: "henry13@ecommerce.com",
        available: true,
      },
      {
        id: 113,
        name: "Elena Bissinger",
        email: "henry14@ecommerce.com",
        available: true,      
      },
      {
        id: 114,
        name: "Jesse Montenegro",
        email: "henry15@ecommerce.com",
        available: true,
      },
      {
        id: 115,
        name: "Pol Ledent",
        email: "henry16@ecommerce.com",
        available: true,
      },
      {
        id: 116,
        name: "Giuseppe Sticchinain",
        email: "henry17@ecommerce.com",
        available: true,
      },
      {
        id: 117,
        name: "Ramón Pascual josa",
        email: "henry18@ecommerce.com",
        available: true,
      },
      {
        id: 118,
        name: "Henciu Daniel Bulimar",
        email: "henry19@ecommerce.com",
        available: true,
      },
      {
        id: 119,
        name: "Leonid Afrémov",
        email: "henry20@ecommerce.com",
        available: true,
      },
      {
        id: 120,
        name: "Omar Sorriente",
        email: "henry21@ecommerce.com",
        available: true,
      },
      {
        id: 121,
        name: "Clara de Bobes",
        email: "henry22@ecommerce.com",
        available: true,
      },
      {
        id: 122,
        name: "Javier Pacheco Almeyda",
        email: "henry23@ecommerce.com",
        available: true,
      },
      {
        id: 123,
        name: "Julio Aguilar Montoya",
        email: "henry24@ecommerce.com",
        available: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("authors", null, {});
  },
};
