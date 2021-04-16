"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("series", [
      {
        id: 100,
        name: "To Forget",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 101,
        name: "I can´t resolve",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 102,
        name: "Dreams",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 103,
        name: "Terror Show",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 104,
        name: "Yes! Iam!",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 105,
        name: "Colours In The Dark",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 106,
        name: "WishMaster",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 107,
        name: "The Pink Phantom",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 108,
        name: "Blow",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 109,
        name: "Portrait Sick",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("series", null, {});
  },
};
