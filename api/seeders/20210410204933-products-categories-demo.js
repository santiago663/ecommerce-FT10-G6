"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products_categories", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 1,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 2,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 3,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 4,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 5,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 6,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 7,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 8,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 9,
        categoryId: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 10,
        categoryId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products_categories", null, {});
  },
};
