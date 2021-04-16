"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        id: 100,
        name: "Hold My Last Breath",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://blog.tubikstudio.com/wp-content/uploads/2019/12/zombie-date-illustration-halloween.png",
        preview:
          "https://blog.tubikstudio.com/wp-content/uploads/2019/12/zombie-date-illustration-halloween.png",
        authorId: 100,
      },
      {
        id: 101,
        name: "Going Under",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://i.pinimg.com/originals/60/b2/28/60b2288698ba4db05ab9c1bc88ce7405.png",
        preview:
          "https://i.pinimg.com/originals/60/b2/28/60b2288698ba4db05ab9c1bc88ce7405.png",
        authorId: 101,
      },
      {
        id: 102,
        name: "My Immortal",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://wallpaperaccess.com/thumb/1506254.jpg",
        preview: "https://wallpaperaccess.com/thumb/1506254.jpg",
        authorId: 102,
      },
      {
        id: 103,
        name: "Whisper",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg",
        preview:
          "https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg",
        authorId: 103,
      },
      {
        id: 104,
        name: "What You Want",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://p4.wallpaperbetter.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
        preview:
          "https://p4.wallpaperbetter.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
        authorId: 104,
      },
      {
        id: 105,
        name: "Sick",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://c4.wallpaperflare.com/wallpaper/846/57/155/digital-art-rabbits-horns-women-comic-art-hd-wallpaper-preview.jpg",
        preview:
          "https://c4.wallpaperflare.com/wallpaper/846/57/155/digital-art-rabbits-horns-women-comic-art-hd-wallpaper-preview.jpg",
        authorId: 105,
      },
      {
        id: 106,
        name: "Cold Nine",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://wallpapercrafter.com/desktop/149370-digital-digital-art-artwork-illustration-simple-simple-background-minimalism-black-colorful-Marvel-Comics-Marvel-Cinematic-Universe-superhero-Ant-Man-fictional-fiction.jpg",
        preview:
          "https://wallpapercrafter.com/desktop/149370-digital-digital-art-artwork-illustration-simple-simple-background-minimalism-black-colorful-Marvel-Comics-Marvel-Cinematic-Universe-superhero-Ant-Man-fictional-fiction.jpg",
        authorId: 106,
      },
      {
        id: 107,
        name: "Push The Bottom",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23444447985543.588ab66d222dd.jpg",
        preview:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23444447985543.588ab66d222dd.jpg",
        authorId: 107,
      },
      {
        id: 108,
        name: "Lost In Paradise",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://c4.wallpaperflare.com/wallpaper/670/870/564/colors-digital-art-3d-geometric-wallpaper-preview.jpg",
        preview:
          "https://c4.wallpaperflare.com/wallpaper/670/870/564/colors-digital-art-3d-geometric-wallpaper-preview.jpg",
        authorId: 108,
      },
      {
        id: 109,
        name: "Blah",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://papers.co/wallpaper/papers.co-bb02-digital-art-color-circle-illustration-art-3d-green-40-wallpaper.jpg",
        preview:
          "https://papers.co/wallpaper/papers.co-bb02-digital-art-color-circle-illustration-art-3d-green-40-wallpaper.jpg",
        authorId: 109,
      },
      {
        id: 110,
        name: "Alley by the Lake",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://afremov.com/images/product/image.jpeg",
        preview:
          "https://afremov.com/images/product/image.jpeg",
        authorId: 110,
      },
      {
        id: 111,
        name: "Yacht Club",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://afremov.com/var/images/product/300.300/image_189.jpeg",
        preview:
          "https://afremov.com/var/images/product/300.300/image_189.jpeg",
        authorId: 111,
      },
      {
        id: 112,
        name: "Elevation",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://afremov.com/images/product/image_219.jpeg",
        preview: "https://afremov.com/images/product/image_219.jpeg",
        authorId: 111,
      },
      {
        id: 113,
        name: "Stockholm",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://afremov.com/images/product/STOCKHOLM.jpg",
        preview:
          "https://afremov.com/images/product/STOCKHOLM.jpg",
        authorId: 111,
      },
      {
        id: 114,
        name: "Lion",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://afremov.com/images/product/LION.jpg",
        preview:
          "https://afremov.com/images/product/LION.jpg",
        authorId: 111,
      },
      {
        id: 115,
        name: "Angry Tiger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://afremov.com/images/product/tiger-painting.jpeg",
        preview:
          "https://afremov.com/images/product/tiger-painting.jpeg",
        authorId: 111,
      },
      {
        id: 116,
        name: "Two Spring Colors",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://afremov.com/images/product/image_109.jpeg",
        preview:
          "https://afremov.com/images/product/image_109.jpeg",
        authorId: 111,
      },
      {
        id: 117,
        name: "Rainy Day",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://afremov.com/images/product/DSC_1685.jpg",
        preview:
          "https://afremov.com/images/product/DSC_1685.jpg",
        authorId: 111,
      },
      {
        id: 118,
        name: "Evening Street",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://afremov.com/images/product/EVENING_1.jpg",
        preview:
          "https://afremov.com/images/product/EVENING_1.jpg",
        authorId: 111,
      },
      {
        id: 119,
        name: "Lovers in the Park",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://afremov.com/images/product/paintings-of-lovers_1.jpg",
        preview:
          "https://afremov.com/images/product/paintings-of-lovers_1.jpg",
        authorId: 111,
      },
      {
        id: 120,
        name: "Beautiful Flowers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/8/5/1209695.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/8/5/1209695.jpg",
        authorId: 112,
      },
      {
        id: 121,
        name: "Memories",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/4/0/1208970.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/4/0/1208970.jpg",
        authorId: 112,
      },
      {
        id: 122,
        name: "Among Thoughts",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/6/0/1208986.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/6/0/1208986.jpg",
        authorId: 112,
      },
      {
        id: 123,
        name: "Ensayo 118",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/3/1209499-607343d0652b4.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/3/1209499-607343d0652b4.jpg",
        authorId: 113,
      },
      {
        id: 124,
        name: "Ensayo 116",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/6/2/1208214.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/6/2/1208214.jpg",
        authorId: 113,
      },
      {
        id: 125,
        name: "Ensayo 104",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/5/1199833.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/5/1199833.jpg",
        authorId: 113,
      },
      {
        id: 126,
        name: "Ensayo 108",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/5/2/1202529.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/5/2/1202529.jpg",
        authorId: 113,
      },
      {
        id: 127,
        name: "Ischia Ponte",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/4/9/1209311.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/4/9/1209311.jpg",
        authorId: 114,
      },
      {
        id: 128,
        name: "Procida 2022",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/4/6/1208550.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/4/6/1208550.jpg",
        authorId: 114,
      },
      {
        id: 129,
        name: "Legende Napoletane",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/4/6/1207267.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/4/6/1207267.jpg",
        authorId: 114,
      },
      {
        id: 130,
        name: "Procida, Isola arcobaleno",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/7/3/1206509.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/7/3/1206509.jpg",
        authorId: 114,
      },
      {
        id: 131,
        name: "Roma, viaggio nel tempo",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/6/1/1207781-60494a30c9f1f.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/6/1/1207781-60494a30c9f1f.jpg",
        authorId: 114,
      },
      {
        id: 132,
        name: "Old Houses in Summer",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/1/1208014.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/1/1208014.jpg",
        authorId: 115,
      },
      {
        id: 133,
        name: "Autumnal Flowers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/6/7/1205537.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/6/7/1205537.jpg",
        authorId: 115,
      },
      {
        id: 134,
        name: "Autumn - 672021",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/8/4/1205536.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/8/4/1205536.jpg",
        authorId: 115,
      },
      {
        id: 135,
        name: "Summer - 672021",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/6/1/1203743.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/6/1/1203743.jpg",
        authorId: 115,
      },
      {
        id: 136,
        name: "Blue cornflowers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/2/2/1/1201565.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/2/2/1/1201565.jpg",
        authorId: 115,
      },
      {
        id: 137,
        name: "Magnolias",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/8/4/9944071159849648.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/8/4/9944071159849648.jpg",
        authorId: 115,
      },
      {
        id: 138,
        name: "Clairière fleurie",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/6/2/5512773761573881.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/6/2/5512773761573881.jpg",
        authorId: 115,
      },
      {
        id: 139,
        name: "Blue cornflowers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/1/0/1461129440097326.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/1/0/1461129440097326.jpg",
        authorId: 115,
      },
      {
        id: 140,
        name: "Iguana In Paradise",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/7/5/1192412.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/7/5/1192412.jpg",
        authorId: 116,
      },
      {
        id: 141,
        name: "TRUE ELEGANCE",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/5/8/1191515-5f120ba1b4a92.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/5/8/1191515-5f120ba1b4a92.jpg",
        authorId: 116,
      },
      {
        id: 142,
        name: "NATURALEZA EN PAZ",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://artelista.s3.amazonaws.com/obras/big/6/2/4/1191509-5f010e8d33961.jpg",
        preview: "https://artelista.s3.amazonaws.com/obras/big/6/2/4/1191509-5f010e8d33961.jpg",
        authorId: 116,
      },
      {
        id: 143,
        name: "GUACAMAYA",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/9/0/1191514-5f1207d332fc3.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/9/0/1191514-5f1207d332fc3.jpg",
        authorId: 116,
      },
      {
        id: 144,
        name: "Pitule,abstract Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/6/9/1209000.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/6/9/1209000.jpg",
        authorId: 117,
      },
      {
        id: 145,
        name: "Abstract Art Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/6/2/1208774.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/6/2/1208774.jpg",
        authorId: 117,
      },
      {
        id: 146,
        name: "Days that Give Flowers, Abstract Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/3/7/1207309.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/3/7/1207309.jpg",
        authorId: 117,
      },
      {
        id: 147,
        name: "Painting Original, Modern Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/0/7/1206271.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/0/7/1206271.jpg",
        authorId: 117,
      },
      {
        id: 148,
        name: "Pastel Roses, Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/3/2/1206282.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/3/2/1206282.jpg",
        authorId: 117,
      },
      {
        id: 149,
        name: "Modern Art, Oil/canvas, Abstract Bissinger",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/8/1/1206263.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/8/1/1206263.jpg",
        authorId: 117,
      },
      {
        id: 150,
        name: "Buceando en la selva",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/4/1/9015733288103222.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/4/1/9015733288103222.jpg",
        authorId: 118,
      },
      {
        id: 151,
        name: "Camino a la femenidad",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/5/2/2529724526938505.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/5/2/2529724526938505.jpg",
        authorId: 118,
      },
      {
        id: 152,
        name: "Con Magia del Atardecer",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/0/4/7908911344218775.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/0/4/7908911344218775.jpg",
        authorId: 118,
      },
      {
        id: 153,
        name: "Con ojos de niña",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/5/9/7997825030988077.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/5/9/7997825030988077.jpg",
        authorId: 118,
      },
      {
        id: 154,
        name: "Danza Sutil",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/0/6/5337959553930608.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/0/6/5337959553930608.jpg",
        authorId: 118,
      },
      {
        id: 155,
        name: "Recordando a Gustave Courbet",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/5/1199833.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/5/1199833.jpg",
        authorId: 119,
      },
      {
        id: 156,
        name: "Hora Zero",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/2/8/8023280696456322.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/2/8/8023280696456322.jpg",
        authorId: 119,
      },
      {
        id: 157,
        name: "La Maga",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/4/5/6192136821102970.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/4/5/6192136821102970.jpg",
        authorId: 119,
      },
      {
        id: 158,
        name: "Devenir",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/3/4/8314776191938828.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/3/4/8314776191938828.jpg",
        authorId: 119,
      },
      {
        id: 159,
        name: "Sonidos de la Tierra",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/3/7/0/2375213825322998.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/3/7/0/2375213825322998.jpg",
        authorId: 119,
      },
      {
        id: 160,
        name: "Puerta del Sol III",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/2/6/7/5866234525478896.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/2/6/7/5866234525478896.jpg",
        authorId: 120,
      },
      {
        id: 161,
        name: "Plaza Mayor Madrid",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/2/6/6392888950383444.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/2/6/6392888950383444.jpg",
        authorId: 120,
      },
      {
        id: 162,
        name: "De Paseo por El Retiro II",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://artelista.s3.amazonaws.com/obras/big/2/6/2/3464084963240703.jpg",
        preview: "https://artelista.s3.amazonaws.com/obras/big/2/6/2/3464084963240703.jpg",
        authorId: 120,
      },
      {
        id: 163,
        name: "L'Estartit",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/3/9/6573581550677345.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/3/9/6573581550677345.jpg",
        authorId: 120,
      },
      {
        id: 164,
        name: "Y sin embargo....te leo",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/9/2527241328826513.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/9/2527241328826513.jpg",
        authorId: 120,
      },
      {
        id: 165,
        name: "Patio cordobés.II",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/3/5/1190232.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/3/5/1190232.jpg",
        authorId: 120,
      },
      {
        id: 166,
        name: "En la Plaza de Chueca",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/7/7/1203425.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/7/7/1203425.jpg",
        authorId: 120,
      },
      {
        id: 167,
        name: "Napoles",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/0/9/1201358.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/0/9/1201358.jpg",
        authorId: 120,
      },
      {
        id: 168,
        name: "Vagabundo",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/0/9/1197879.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/0/9/1197879.jpg",
        authorId: 120,
      },
      {
        id: 169,
        name: "La Huida",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/2/3/1198982.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/2/3/1198982.jpg",
        authorId: 120,
      },
      {
        id: 170,
        name: "Tango en naranjas",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/4/3/8126600668938423.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/4/3/8126600668938423.jpg",
        authorId: 121,
      },
      {
        id: 171,
        name: "Figura caminando",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/3/2/4/8966954350888410.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/3/2/4/8966954350888410.jpg",
        authorId: 121,
      },
      {
        id: 172,
        name: "Tribulaciones",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://artelista.s3.amazonaws.com/obras/big/2/4/3/5911677238840467.jpg",
        preview: "https://artelista.s3.amazonaws.com/obras/big/2/4/3/5911677238840467.jpg",
        authorId: 121,
      },
      {
        id: 173,
        name: "Piccolo Tango III (en la noche)",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/2/9/3455038146538298.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/2/9/3455038146538298.jpg",
        authorId: 121,
      },
      {
        id: 174,
        name: "Testa in movimento",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/3/1/3/5890071497695709.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/3/1/3/5890071497695709.jpg",
        authorId: 121,
      },
      {
        id: 175,
        name: "Tango en violetas",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/4/4/1926210571355809.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/4/4/1926210571355809.jpg",
        authorId: 121,
      },
      {
        id: 176,
        name: "Roland y Barthes",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/2/8/8763332442034465.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/2/8/8763332442034465.jpg",
        authorId: 121,
      },
      {
        id: 177,
        name: "Charlotte",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/3/5/6/2950353944225771.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/3/5/6/2950353944225771.jpg",
        authorId: 121,
      },
      {
        id: 178,
        name: "Surma florida",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/4/7/2429421454607524.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/4/7/2429421454607524.jpg",
        authorId: 121,
      },
      {
        id: 179,
        name: "Clara de Bobes",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/4/0/4047854092217482.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/4/0/4047854092217482.jpg",
        authorId: 121,
      },
      {
        id: 180,
        name: "Aïssatou",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/3/9287150134441775.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/3/9287150134441775.jpg",
        authorId: 121,
      },
      {
        id: 181,
        name: "Chica Surma",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/5/6201581240758377.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/2/5/6201581240758377.jpg",
        authorId: 121,
      },
      {
        id: 182,
        name: "Niña Suri",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/1/5646700953079489.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/4/1/1/5646700953079489.jpg",
        authorId: 121,
      },
      {
        id: 183,
        name: "Leni",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/0/1/6378448960377211.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/0/1/6378448960377211.jpg",
        authorId: 121,
      },
      {
        id: 184,
        name: "Little Michael con nubes en el horizonte",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/9/8/5547658524519808.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/9/8/5547658524519808.jpg",
        authorId: 121,
      },
      {
        id: 185,
        name: "Lady Lobste",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/4/2/3790663432974979.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/4/2/3790663432974979.jpg",
        authorId: 121,
      },
      {
        id: 186,
        name: "La hija",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/8/5/5/3336057241483014.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/8/5/5/3336057241483014.jpg",
        authorId: 121,
      },
      {
        id: 187,
        name: "V. Woolf",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/6/0/2/3892460998702629.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/6/0/2/3892460998702629.jpg",
        authorId: 121,
      },
      {
        id: 188,
        name: "La Reina",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/2/9/9/1195466.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/2/9/9/1195466.jpg",
        authorId: 121,
      },
      {
        id: 189,
        name: "El Mago",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/6/5/1200005.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/6/5/1200005.jpg",
        authorId: 121,
      },
      {
        id: 190,
        name: "Pasión",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/5/7/1200007.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/5/7/1200007.jpg",
        authorId: 121,
      },
      {
        id: 191,
        name: "Flores raras",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/2/0/4/1203642.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/2/0/4/1203642.jpg",
        authorId: 121,
      },
      {
        id: 192,
        name: "Old Houses in Summer",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/1/1208014.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/1/1/1208014.jpg",
        authorId: 121,
      },
      {
        id: 193,
        name: "Autumnal Flowers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/6/7/1205537.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/6/7/1205537.jpg",
        authorId: 121,
      },
      {
        id: 194,
        name: "La tormenta",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/7/0/4/1471723597260782.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/7/0/4/1471723597260782.jpg",
        authorId: 122,
      },
      {
        id: 195,
        name: "Mona Lisa",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/5/9/5/1055727-5ee90981772ea.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/5/9/5/1055727-5ee90981772ea.jpg",
        authorId: 122,
      },
      {
        id: 196,
        name: "Gabrielle Cot",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/1/3/6/5720908141529745.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/1/3/6/5720908141529745.jpg",
        authorId: 122,
      },
      {
        id: 197,
        name: "La chica de la perla version personal",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/0/3/4/6946053564028701.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/0/3/4/6946053564028701.jpg",
        authorId: 122,
      },
      {
        id: 198,
        name: "Clairière fleurie",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/9/6/2/5512773761573881.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/9/6/2/5512773761573881.jpg",
        authorId: 122,
      },
      {
        id: 199,
        name: "catrina",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://artelista.s3.amazonaws.com/obras/big/2/0/2/7485327363678715.jpg",
        preview:
          "https://artelista.s3.amazonaws.com/obras/big/2/0/2/7485327363678715.jpg",
        authorId: 122,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
