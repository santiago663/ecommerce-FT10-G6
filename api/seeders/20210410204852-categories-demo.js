"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      { id: 1, name: "Black and White", available: true },
      { id: 2, name: "Portrait", available: true  },
      { id: 3, name: "Color", available: true  },
      { id: 4, name: "Ilustration", available: true  },
      { id: 5, name: "Abstract", available: true  },
      { id: 6, name: "Nature", available: true  },
      { id: 7, name: "Animals", available: true  },
      { id: 8, name: "Psikodelic", available: true  },
      { id: 9, name: "Subrealist", available: true  },
      { id: 10, name: "Hyper-realist", available: true  },
      { id: 11, name: "Pop-Art", available: true  },
      { id: 12, name: "Expressionism", available: true  },
      { id: 13, name: "Surrealism", available: true },
      { id: 14, name: "Baroque", available: true },
      { id: 15, name: "Neoclassicism", available: true },
      { id: 16, name: "Romanticism", available: true  },
      { id: 17, name: "Retro", available: true  },
      { id: 18, name: "Gothic", available: true },
      { id: 19, name: "Cubism", available: true },
      { id: 20, name: "Realism", available: true },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
