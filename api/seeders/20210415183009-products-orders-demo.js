'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products_orders", [
      {
        price: 202568.36,
        productId: 1,
        orderId: 1,
      },
      {
        price: 456879.36,
        productId: 2,
        orderId: 2,
      },
      {
        price: 456892.36,
        productId: 3,
        orderId: 3,
      },
      {
        price: 478920.36,
        productId: 4,
        orderId: 4,
      },
      {
        price: 202568.36,
        productId: 5,
        orderId: 5,
      },
      {
        price: 456879.36,
        productId: 6,
        orderId: 6,
      },
      {
        price: 456892.36,
        productId: 7,
        orderId: 7,
      },
      {
        price: 478920.36,
        productId: 8,
        orderId: 8,
      },
      {
        price: 202568.36,
        productId: 9,
        orderId: 9,
      },
      {
        price: 456879.36,
        productId: 10,
        orderId: 10,
      },
      {
        price: 456892.36,
        productId: 11,
        orderId: 11,
      },
      {
        price: 478920.36,
        productId: 12,
        orderId: 12,
      },
      {
        price: 202568.36,
        productId: 13,
        orderId: 13,
      },
      {
        price: 456879.36,
        productId: 14,
        orderId: 14,
      },
      {
        price: 456892.36,
        productId: 15,
        orderId: 15,
      },
      {
        price: 478920.36,
        productId: 16,
        orderId: 16,
      },
      {
        price: 202568.36,
        productId: 17,
        orderId: 17,
      },
      {
        price: 456879.36,
        productId: 18,
        orderId: 18,
      },
      {
        price: 456892.36,
        productId: 19,
        orderId: 19,
      },
      {
        price: 478920.36,
        productId: 20,
        orderId: 20,
      },
      {
        price: 202568.36,
        productId: 21,
        orderId: 21,
      },
      {
        price: 456879.36,
        productId: 22,
        orderId: 22,
      },
      {
        price: 456892.36,
        productId: 23,
        orderId: 23,
      },
      {
        price: 478920.36,
        productId: 24,
        orderId: 24,
      },
      {
        price: 202568.36,
        productId: 25,
        orderId: 25,
      },
      {
        price: 456879.36,
        productId: 26,
        orderId: 26,
      },
      {
        price: 456892.36,
        productId: 27,
        orderId: 27,
      },
      {
        price: 478920.36,
        productId: 28,
        orderId: 28,
      },
      {
        price: 202568.36,
        productId: 29,
        orderId: 29,
      },
      {
        price: 456879.36,
        productId: 30,
        orderId: 30,
      },
      {
        price: 456892.36,
        productId: 31,
        orderId: 31,
      },
      {
        price: 478920.36,
        productId: 32,
        orderId: 32,
      },
      {
        price: 202568.36,
        productId: 33,
        orderId: 33,
      },
      {
        price: 456879.36,
        productId: 34,
        orderId: 34,
      },
      {
        price: 456892.36,
        productId: 35,
        orderId: 35,
      },
      {
        price: 478920.36,
        productId: 36,
        orderId: 36,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products_orders", null, {});
  }
};
