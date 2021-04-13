"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("authors", [
      {
        id: 1,
        name: "Sam Gilliam",
        email: "henry01@ecommerce.com",
        available: true,
      },
      {
        id: 2,
        name: "Mary Lovelace O'Neal",
        email: "henry02@ecommerce.com",
        available: true,
      },
      {
        id: 3,
        name: "Jon Spencer",
        email: "henry03@ecommerce.com",
        available: true,
      },
      {
        id: 4,
        name: "Israel Rodriguez",
        email: "henry04@ecommerce.com",
        available: true,
      },
      {
        id: 5,
        name: "Federico Salguero",
        email: "henry05@ecommerce.com",
        available: true,
      },
      {
        id: 6,
        name: "Martin Inca",
        email: "henry06@ecommerce.com",
        available: true,
      },
      {
        id: 7,
        name: "Gustavo Etcheverri",
        email: "henry07@ecommerce.com",
        available: true,
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
        available: true,
      },
      {
        id: 10,
        name: "Cristina Fernandez",
        email: "henry10@ecommerce.com",
        available: true,
      },
      {
        id: 11,
        name: "Felipe San Pedro",
        email: "henry011@ecommerce.com",
        available: true,
      },
      {
        id: 12,
        name: "Oscar Carballo Corcino",
        email: "henry12@ecommerce.com",
        available: true,
      },
      {
        id: 13,
        name: "Alicia Imas",
        email: "henry13@ecommerce.com",
        available: true,
      },
      {
        id: 14,
        name: "Elena Bissinger",
        email: "henry14@ecommerce.com",
        available: true,      
      },
      {
        id: 15,
        name: "Jesse Montenegro",
        email: "henry15@ecommerce.com",
        available: true,
      },
      {
        id: 16,
        name: "Pol Ledent",
        email: "henry16@ecommerce.com",
        available: true,
      },
      {
        id: 17,
        name: "Giuseppe Sticchinain",
        email: "henry17@ecommerce.com",
        available: true,
      },
      {
        id: 18,
        name: "Ramón Pascual josa",
        email: "henry18@ecommerce.com",
        available: true,
      },
      {
        id: 19,
        name: "Henciu Daniel Bulimar",
        email: "henry19@ecommerce.com",
        available: true,
      },
      {
        id: 20,
        name: "Leonid Afrémov",
        email: "henry20@ecommerce.com",
        available: true,
      },
      {
        id: 21,
        name: "Omar Sorriente",
        email: "henry21@ecommerce.com",
        available: true,
      },
      {
        id: 22,
        name: "Clara de Bobes",
        email: "henry22@ecommerce.com",
        available: true,
      },
      {
        id: 23,
        name: "Javier Pacheco Almeyda",
        email: "henry23@ecommerce.com",
        available: true,
      },
      {
        id: 24,
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
