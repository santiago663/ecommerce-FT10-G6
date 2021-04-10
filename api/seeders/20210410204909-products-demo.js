"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Hold My Last Breath",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/vector-geometric-seamless-pattern-with-squares-lines-grid-repeat-vector-id1285663254?k=6&m=1285663254&s=612x612&w=0&h=DyYP6fwAZ5RYxuJU6_ys2Q1JwdwO52VYkA1GY28ANEE=",
        preview:
          "https://media.istockphoto.com/vectors/vector-geometric-seamless-pattern-with-squares-lines-grid-repeat-vector-id1285663254?k=6&m=1285663254&s=612x612&w=0&h=DyYP6fwAZ5RYxuJU6_ys2Q1JwdwO52VYkA1GY28ANEE=",
      },
      {
        name: "Going Under",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/vector-illustration-mid-century-modern-graphic-70s-retro-funky-vector-id1272863803?k=6&m=1272863803&s=612x612&w=0&h=gaP7K0qYZfTkG0-PyEU0qgL7mHax5q7mnIRhCE-hc2M=",
        preview:
          "https://media.istockphoto.com/vectors/vector-illustration-mid-century-modern-graphic-70s-retro-funky-vector-id1272863803?k=6&m=1272863803&s=612x612&w=0&h=gaP7K0qYZfTkG0-PyEU0qgL7mHax5q7mnIRhCE-hc2M=",
      },
      {
        name: "My Immortal",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/vector-illustration-abstract-contemporary-aesthetic-backgrounds-set-vector-id1280226124?k=6&m=1280226124&s=612x612&w=0&h=nFKDQQ5Wps9lsSqeEpnWQYjDGNzrQLfKNOy5iWfFwbY=",
        preview:
          "https://media.istockphoto.com/vectors/vector-illustration-abstract-contemporary-aesthetic-backgrounds-set-vector-id1280226124?k=6&m=1280226124&s=612x612&w=0&h=nFKDQQ5Wps9lsSqeEpnWQYjDGNzrQLfKNOy5iWfFwbY=",
      },
      {
        name: "Whisper",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/opart-abstract-background-with-diagonal-lines-stylish-wavy-striped-vector-id1263462769?k=6&m=1263462769&s=612x612&w=0&h=ijZ_zDSzobSesafD-I0Eni26iK0ISwWrsRok4xeSJqQ=",
        preview:
          "https://media.istockphoto.com/vectors/opart-abstract-background-with-diagonal-lines-stylish-wavy-striped-vector-id1263462769?k=6&m=1263462769&s=612x612&w=0&h=ijZ_zDSzobSesafD-I0Eni26iK0ISwWrsRok4xeSJqQ=",
      },
      {
        name: "What You Want",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/abstract-geometric-black-and-white-glitch-background-vector-id1168965356?k=6&m=1168965356&s=612x612&w=0&h=MvrPld-SQxCeGmyQPtdvK_YOwzTlMNFGLm2zgvYWYTE=",
        preview:
          "https://media.istockphoto.com/vectors/abstract-geometric-black-and-white-glitch-background-vector-id1168965356?k=6&m=1168965356&s=612x612&w=0&h=MvrPld-SQxCeGmyQPtdvK_YOwzTlMNFGLm2zgvYWYTE=",
      },
      {
        name: "Sick",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/botany-set-vintage-medical-realistic-isolated-flowers-nature-baroque-vector-id1065395070?k=6&m=1065395070&s=612x612&w=0&h=FNLtN8hWsi0RT_kSop6E0U4UKgoadBrBwT4oNfWQv_k=",
        preview:
          "https://media.istockphoto.com/vectors/botany-set-vintage-medical-realistic-isolated-flowers-nature-baroque-vector-id1065395070?k=6&m=1065395070&s=612x612&w=0&h=FNLtN8hWsi0RT_kSop6E0U4UKgoadBrBwT4oNfWQv_k=",
      },
      {
        name: "Cold Nine",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/brazilian-symbols-vector-id1015332974?k=6&m=1015332974&s=612x612&w=0&h=JBzq3QHBbSL2teJMokUNxllbJMVX4Wo5xytdxMEKlIM=",
        preview:
          "https://media.istockphoto.com/vectors/brazilian-symbols-vector-id1015332974?k=6&m=1015332974&s=612x612&w=0&h=JBzq3QHBbSL2teJMokUNxllbJMVX4Wo5xytdxMEKlIM=",
      },
      {
        name: "Push The Bottom",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/brain-with-glasses-drawing-illustration-isolated-on-white-bg-vector-id1170984187?k=6&m=1170984187&s=612x612&w=0&h=WDNVyxBYh_vGhmDQAq2Xrh0KU9wx81Dln245Z95Teqc=",
        preview:
          "https://media.istockphoto.com/vectors/brain-with-glasses-drawing-illustration-isolated-on-white-bg-vector-id1170984187?k=6&m=1170984187&s=612x612&w=0&h=WDNVyxBYh_vGhmDQAq2Xrh0KU9wx81Dln245Z95Teqc=",
      },
      {
        name: "Lost In Paradise",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: "true",
        fileLink:
          "https://media.istockphoto.com/vectors/seafood-vector-illustrations-healthy-marine-food-hand-drawn-set-vector-id1048785072?k=6&m=1048785072&s=612x612&w=0&h=odw2ZqODJXpk_d3QdaaajLyaLjwmoPQerqFmFdKkQzQ=",
        preview:
          "https://media.istockphoto.com/vectors/seafood-vector-illustrations-healthy-marine-food-hand-drawn-set-vector-id1048785072?k=6&m=1048785072&s=612x612&w=0&h=odw2ZqODJXpk_d3QdaaajLyaLjwmoPQerqFmFdKkQzQ=",
      },
      {
        name: "Blah",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: "false",
        fileLink:
          "https://media.istockphoto.com/vectors/engraving-illustration-of-honey-bee-vector-id888100382?k=6&m=888100382&s=612x612&w=0&h=1ntSyFhTFadNKf8b2w-gVfGG7AUVhYUvdsbTJJ1E_4Y=",
        preview:
          "https://media.istockphoto.com/vectors/engraving-illustration-of-honey-bee-vector-id888100382?k=6&m=888100382&s=612x612&w=0&h=1ntSyFhTFadNKf8b2w-gVfGG7AUVhYUvdsbTJJ1E_4Y=",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
