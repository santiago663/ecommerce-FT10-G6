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
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 11,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 12,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 13,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 14,
        categoryId: 12,
      },{
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 15,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 16,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 17,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 18,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 19,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 20,
        categoryId: 12,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 21,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 22,
        categoryId: 5,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 23,
        categoryId: 5,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 24,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 25,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 26,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 27,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 28,
        categoryId: 4,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 29,
        categoryId: 13,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 30,
        categoryId: 13,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 31,
        categoryId: 13,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 32,
        categoryId: 13,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 33,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 34,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 35,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 36,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 37,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 38,
        categoryId: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 39,
        categoryId: 15,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        productId: 40,
        categoryId: 6,
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products_categories", null, {});
  },
};
