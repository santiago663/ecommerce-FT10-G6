"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("roles", [
      { id: 100, description: "Admin" },
      { id: 101, description: "Registered" },
      { id: 102, description: "Guest" },
      { id: 103, description: "Banned" },
    ]);
    await queryInterface.bulkInsert("methods", [
      { id: 1, description: "Ninguno" },
      { id: 2, description: "Mercado Pago" },
      { id: 3, description: "Paypal" },
      { id: 4, description: "stripe" },
    ]);

    await queryInterface.bulkInsert("users", [
      {
        id: 100,
        name: "henry admin",
        email: "admin@admin.com",
        password: "_1234",
        phone_Number: ["54","344"], //1 admin, 2: registrados, 3:invitados
        location_id: 2,
        roleId: 100,
        available: true,
      },
      {
        id: 101,
        name: "angel",
        email: "angel@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 1,
        roleId: 101,
        available: true,
      },
      {
        id: 102,
        name: "santi",
        email: "santi@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 3,
        roleId: 101,
        available: true,
      },
      {
        id: 103,
        name: "dario",
        email: "dario@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 5,
        roleId: 101,
        available: true,
      },
      {
        id: 104,
        name: "lucia",
        email: "lucia@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 3,
        roleId: 101,
        available: true,
      },
      {
        id: 105,
        name: "eze",
        email: "eze@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 3,
        roleId: 101,
        available: true,
      },
      {
        id: 106,
        name: "leandro",
        email: "leandro@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 3,
        roleId: 101,
        available: true,
      },
      {
        id: 107,
        name: "cristian",
        email: "cristian@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 3,
        roleId: 101,
        available: true,
      },
      {
        id: 108,
        name: "lenin",
        email: "lenin@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 9,
        roleId: 101,
        available: true,
      },
      {
        id: 109,
        name: "nahuel",
        email: "nahuel@ecommerce.com",
        password: "1234",
        phone_Number: ["54","344"],
        location_id: 8,
        roleId: 101,
        available: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
