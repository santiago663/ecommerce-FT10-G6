'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products_orders", [
      {
        price: 202568.36,
        productId: 100,
        orderId: 100,
      },
      {
        price: 456879.36,
        productId: 101,
        orderId: 101,
      },
      {
        price: 456892.36,
        productId: 102,
        orderId: 102,
      },
      {
        price: 478920.36,
        productId: 103,
        orderId: 103,
      },
      {
        price: 202568.36,
        productId: 104,
        orderId: 104,
      },
      {
        price: 456879.36,
        productId: 105,
        orderId: 105,
      },
      {
        price: 456892.36,
        productId: 106,
        orderId: 106,
      },
      {
        price: 478920.36,
        productId: 107,
        orderId: 107,
      },
      {
        price: 202568.36,
        productId: 108,
        orderId: 108,
      },
      {
        price: 456879.36,
        productId: 109,
        orderId: 109,
      },
      {
        price: 456892.36,
        productId: 110,
        orderId: 110,
      },
      {
        price: 478920.36,
        productId: 111,
        orderId: 111,
      },
      {
        price: 202568.36,
        productId: 112,
        orderId: 112,
      },
      {
        price: 456879.36,
        productId: 113,
        orderId: 113,
      },
      {
        price: 456892.36,
        productId: 114,
        orderId: 114,
      },
      {
        price: 478920.36,
        productId: 115,
        orderId: 115,
      },
      {
        price: 202568.36,
        productId: 116,
        orderId: 116,
      },
      {
        price: 456879.36,
        productId: 117,
        orderId: 117,
      },
      {
        price: 456892.36,
        productId: 118,
        orderId: 118,
      },
      {
        price: 478920.36,
        productId: 119,
        orderId: 119,
      },
      {
        price: 202568.36,
        productId: 120,
        orderId: 120,
      },
      {
        price: 456879.36,
        productId: 121,
        orderId: 121,
      },
      {
        price: 456892.36,
        productId: 122,
        orderId: 122,
      },
      {
        price: 478920.36,
        productId: 123,
        orderId: 123,
      },
      {
        price: 202568.36,
        productId: 124,
        orderId: 124,
      },
      {
        price: 456879.36,
        productId: 125,
        orderId: 125,
      },
      {
        price: 456892.36,
        productId: 126,
        orderId: 126,
      },
      {
        price: 478920.36,
        productId: 127,
        orderId: 127,
      },
      {
        price: 202568.36,
        productId: 128,
        orderId: 128,
      },
      {
        price: 456879.36,
        productId: 129,
        orderId: 129,
      },
      {
        price: 456892.36,
        productId: 130,
        orderId: 130,
      },
      {
        price: 478920.36,
        productId: 131,
        orderId: 131,
      },
      {
        price: 202568.36,
        productId: 132,
        orderId: 132,
      },
      {
        price: 456879.36,
        productId: 133,
        orderId: 133,
      },
      {
        price: 456892.36,
        productId: 134,
        orderId: 134,
      },
      {
        price: 478920.36,
        productId: 135,
        orderId: 135,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products_orders", null, {});
  }
};
