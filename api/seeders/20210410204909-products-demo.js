"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        id: 1,
        name: "Hold My Last Breath",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: "true",
        fileLink:
          "https://blog.tubikstudio.com/wp-content/uploads/2019/12/zombie-date-illustration-halloween.png",
        preview:
          "https://blog.tubikstudio.com/wp-content/uploads/2019/12/zombie-date-illustration-halloween.png",
        authorId: 1,
      },
      {
        id: 2,
        name: "Going Under",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: "true",
        fileLink:
          "https://i.pinimg.com/originals/60/b2/28/60b2288698ba4db05ab9c1bc88ce7405.png",
        preview:
          "https://i.pinimg.com/originals/60/b2/28/60b2288698ba4db05ab9c1bc88ce7405.png",
        authorId: 2,
      },
      {
        id: 3,
        name: "My Immortal",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: "true",
        fileLink: "https://wallpaperaccess.com/thumb/1506254.jpg",
        preview: "https://wallpaperaccess.com/thumb/1506254.jpg",
        authorId: 3,
      },
      {
        id: 4,
        name: "Whisper",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: "true",
        fileLink:
          "https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg",
        preview:
          "https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg",
        authorId: 4,
      },
      {
        id: 5,
        name: "What You Want",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: "true",
        fileLink:
          "https://p4.wallpaperbetter.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
        preview:
          "https://p4.wallpaperbetter.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
        authorId: 5,
      },
      {
        id: 6,
        name: "Sick",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: "true",
        fileLink:
          "https://c4.wallpaperflare.com/wallpaper/846/57/155/digital-art-rabbits-horns-women-comic-art-hd-wallpaper-preview.jpg",
        preview:
          "https://c4.wallpaperflare.com/wallpaper/846/57/155/digital-art-rabbits-horns-women-comic-art-hd-wallpaper-preview.jpg",
        authorId: 6,
      },
      {
        id: 7,
        name: "Cold Nine",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: "true",
        fileLink:
          "https://wallpapercrafter.com/desktop/149370-digital-digital-art-artwork-illustration-simple-simple-background-minimalism-black-colorful-Marvel-Comics-Marvel-Cinematic-Universe-superhero-Ant-Man-fictional-fiction.jpg",
        preview:
          "https://wallpapercrafter.com/desktop/149370-digital-digital-art-artwork-illustration-simple-simple-background-minimalism-black-colorful-Marvel-Comics-Marvel-Cinematic-Universe-superhero-Ant-Man-fictional-fiction.jpg",
        authorId: 7,
      },
      {
        id: 8,
        name: "Push The Bottom",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: "true",
        fileLink:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23444447985543.588ab66d222dd.jpg",
        preview:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23444447985543.588ab66d222dd.jpg",
        authorId: 8,
      },
      {
        id: 9,
        name: "Lost In Paradise",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: "true",
        fileLink:
          "https://c4.wallpaperflare.com/wallpaper/670/870/564/colors-digital-art-3d-geometric-wallpaper-preview.jpg",
        preview:
          "https://c4.wallpaperflare.com/wallpaper/670/870/564/colors-digital-art-3d-geometric-wallpaper-preview.jpg",
        authorId: 9,
      },
      {
        id: 10,
        name: "Blah",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: "false",
        fileLink:
          "https://papers.co/wallpaper/papers.co-bb02-digital-art-color-circle-illustration-art-3d-green-40-wallpaper.jpg",
        preview:
          "https://papers.co/wallpaper/papers.co-bb02-digital-art-color-circle-illustration-art-3d-green-40-wallpaper.jpg",
        authorId: 10,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
