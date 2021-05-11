"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("categories", [
      { id: 100, name: "Black and White", available: true },
      { id: 101, name: "Portrait", available: true  },
      { id: 102, name: "Color", available: true  },
      { id: 103, name: "Ilustration", available: true  },
      { id: 104, name: "Abstract", available: true  },
      { id: 105, name: "Nature", available: true  },
      { id: 106, name: "Animals", available: true  },
      { id: 107, name: "Psikodelic", available: true  },
      { id: 108, name: "Hyper-realist", available: true  },
      { id: 109, name: "Pop-Art", available: true  },
      { id: 110, name: "Expressionism", available: true  },
      { id: 111, name: "Surrealism", available: true },
      { id: 112, name: "Baroque", available: true },
      { id: 113, name: "Neoclassicism", available: true },
      { id: 114, name: "Romanticism", available: true  },
      { id: 115, name: "Retro", available: true  },
      { id: 116, name: "Gothic", available: true },
      { id: 117, name: "Cubism", available: true },
      { id: 118, name: "Realism", available: true },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("categories", null, {});
  },
};
