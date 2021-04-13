"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("series", [
      {
        id: 1,
        name: "To Forget",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 2,
        name: "I can´t resolve",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 3,
        name: "Dreams",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 4,
        name: "Terror Show",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 5,
        name: "Yes! Iam!",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 6,
        name: "Colours In The Dark",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 7,
        name: "WishMaster",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 8,
        name: "The Pink Phantom",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 9,
        name: "Blow",
        description:
          "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de 'de Finnibus Bonorum et Malorum' (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.  ",
        available: true,
      },
      {
        id: 10,
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
