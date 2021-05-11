"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        id: 100,
        name: "Pop Plop",
        description:
          "Make it Pop - Photoshop / Illustrator",
        price: "2000",
        available: true,
        stock: 9,
        initialStock: 10,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FPoplast.jpg?alt=media&token=8ed2c0b9-554c-4c42-9fa1-42d993fc6957",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FPoplast.jpg?alt=media&token=8ed2c0b9-554c-4c42-9fa1-42d993fc6957",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FGoing%20Under.png?alt=media&token=8261f91b-d667-4a49-a0a2-bfc50d2223ed",
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
        fileLink: "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FGoing%20Under.png?alt=media&token=8261f91b-d667-4a49-a0a2-bfc50d2223ed",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fwhisper.jpg?alt=media&token=b6d0b2d3-9685-498c-9029-d6aa37d92557",
        preview:
          "https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg",
        authorId: 103,
      },
      {
        id: 104,
        name: "Death Wing",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FDeathwing.jpg?alt=media&token=5da80ba1-bd1d-45a1-a601-0e9bd83e42b3",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FDeathwing.jpg?alt=media&token=5da80ba1-bd1d-45a1-a601-0e9bd83e42b3",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FSick.jpg?alt=media&token=00e063ed-4f52-48cc-819f-481d46336f9c",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FColdNine.jpg?alt=media&token=4473a381-6c62-4376-8c40-1776d2cd05ef",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fpushthebottom.jpg?alt=media&token=38b5b37c-6960-4aed-8e2b-87850aeb0b7e",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLost%20In%20Paradise.jpg?alt=media&token=362250c2-bf1f-44c0-9e2e-00fe8c0fe67b",
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
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBlah.jpg?alt=media&token=be6e609e-40f5-4bec-880d-2ddffbbe11fe",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBlah.jpg?alt=media&token=be6e609e-40f5-4bec-880d-2ddffbbe11fe",
        authorId: 109,
      },
      {
        id: 110,
        name: "DarVoldemort",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fdarvoldemort.jpg?alt=media&token=3bb6b941-2e86-4a92-a097-dda94711f4f9",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fdarvoldemort.jpg?alt=media&token=3bb6b941-2e86-4a92-a097-dda94711f4f9",
        authorId: 110,
      },
      {
        id: 111,
        name: "Kerrigan",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fface.jpg?alt=media&token=db3967c4-2b7d-4829-85c1-7f8f81f6fac3",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fface.jpg?alt=media&token=db3967c4-2b7d-4829-85c1-7f8f81f6fac3",
        authorId: 111,
      },
      {
        id: 112,
        name: "Within the water",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FinsideWathe.jpg?alt=media&token=9bb83ece-3f93-4cf3-a4c4-8b2a9d88ddb3",
        preview: "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FinsideWathe.jpg?alt=media&token=9bb83ece-3f93-4cf3-a4c4-8b2a9d88ddb3",
        authorId: 111,
      },
      {
        id: 113,
        name: "Max Res",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fmaxres.jpg?alt=media&token=20ed724a-7df6-4d6c-b47f-bc5b179ea46f",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fmaxres.jpg?alt=media&token=20ed724a-7df6-4d6c-b47f-bc5b179ea46f",
        authorId: 111,
      },
      {
        id: 114,
        name: "Buda Rocks",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Frock-face-environment-statue.jpg?alt=media&token=a3af88d2-59ec-4ebc-9766-a04cb1b43428",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Frock-face-environment-statue.jpg?alt=media&token=a3af88d2-59ec-4ebc-9766-a04cb1b43428",
        authorId: 111,
      },
      {
        id: 115,
        name: "Wolven",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fwolven.jpg?alt=media&token=94158a24-a813-481a-837e-74b663e774b2",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fwolven.jpg?alt=media&token=94158a24-a813-481a-837e-74b663e774b2",
        authorId: 111,
      },
      {
        id: 116,
        name: "Future nostalgia",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FApocalipticFuture.jpg?alt=media&token=c6292355-fa39-4021-a027-a7aefd33ab2c",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FApocalipticFuture.jpg?alt=media&token=c6292355-fa39-4021-a027-a7aefd33ab2c",
        authorId: 111,
      },
      {
        id: 117,
        name: "Blackarch",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fwp2618282-blackarch-wallpaper.png?alt=media&token=ac74c5e0-4feb-4a2e-a7d9-b19df6b85154",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fwp2618282-blackarch-wallpaper.png?alt=media&token=ac74c5e0-4feb-4a2e-a7d9-b19df6b85154",
        authorId: 111,
      },
      {
        id: 118,
        name: "Lilith Promises",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLilith_DIV_face.jpg?alt=media&token=6cd36f3e-ea22-4f35-b620-445ced0fc8c0",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLilith_DIV_face.jpg?alt=media&token=6cd36f3e-ea22-4f35-b620-445ced0fc8c0",
        authorId: 111,
      },
      {
        id: 119,
        name: "Cindy",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fb6042623-0b04-4c53-86d6-260b08687da3.jpg?alt=media&token=bc3d95f2-db1a-4283-a963-835f00ad32b9",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2Fb6042623-0b04-4c53-86d6-260b08687da3.jpg?alt=media&token=bc3d95f2-db1a-4283-a963-835f00ad32b9",
        authorId: 111,
      },
      {
        id: 120,
        name: "Algalon the Observer",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FAlgalon%20the%20Observer.jpg?alt=media&token=3cb977f0-7153-4683-a84c-733f69a2f95a",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FAlgalon%20the%20Observer.jpg?alt=media&token=3cb977f0-7153-4683-a84c-733f69a2f95a",
        authorId: 112,
      },
      {
        id: 121,
        name: "Athenas LSD",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FAtenas%20LSD.jpg?alt=media&token=4a534f3a-03b9-4f13-82cf-258b2491af38",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FAtenas%20LSD.jpg?alt=media&token=4a534f3a-03b9-4f13-82cf-258b2491af38",
        authorId: 112,
      },
      {
        id: 122,
        name: "Bastion in the forest",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBastion%20in%20the%20Forest.jpg?alt=media&token=c2007338-b9ad-464f-8e91-955fe855632a",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBastion%20in%20the%20Forest.jpg?alt=media&token=c2007338-b9ad-464f-8e91-955fe855632a",
        authorId: 112,
      },
      {
        id: 123,
        name: "Bastion",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBastion.jpg?alt=media&token=027f668e-7db5-4e02-becb-4b85a0c1e7c2",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBastion.jpg?alt=media&token=027f668e-7db5-4e02-becb-4b85a0c1e7c2",
        authorId: 113,
      },
      {
        id: 124,
        name: "Bio Robotic",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBio%20robotic.jpg?alt=media&token=0258fa60-6d99-4895-88aa-eafa863fcd91",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FBio%20robotic.jpg?alt=media&token=0258fa60-6d99-4895-88aa-eafa863fcd91",
        authorId: 113,
      },
      {
        id: 125,
        name: "Chinesse Sense",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FCyber%20Chinese%20Girl.jpg?alt=media&token=c7e7b9c9-4a2c-4420-9788-74c6b73d5273",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FCyber%20Chinese%20Girl.jpg?alt=media&token=c7e7b9c9-4a2c-4420-9788-74c6b73d5273",
        authorId: 113,
      },
      {
        id: 126,
        name: "Dominatrix Demon",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FDominatrix%20demon.jpg?alt=media&token=63dd66e0-22bf-4df6-9ed5-60df54ccff5d",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FDominatrix%20demon.jpg?alt=media&token=63dd66e0-22bf-4df6-9ed5-60df54ccff5d",
        authorId: 113,
      },
      {
        id: 127,
        name: "Egyptian Trapers",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FEgyptian%20trapers.jpg?alt=media&token=355bae9e-67ac-42af-9458-bf0dba0df732",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FEgyptian%20trapers.jpg?alt=media&token=355bae9e-67ac-42af-9458-bf0dba0df732",
        authorId: 114,
      },
      {
        id: 128,
        name: "Elen",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FElen.jpg?alt=media&token=ffecd857-872f-4b9b-99ab-c784f0dbbefb",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FElen.jpg?alt=media&token=ffecd857-872f-4b9b-99ab-c784f0dbbefb",
        authorId: 114,
      },
      {
        id: 129,
        name: "Emotional Sad Anime",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FEmotional%20Sad%20Anime.jpg?alt=media&token=0df7a407-3206-4a1c-b4d1-f3940f647506",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FEmotional%20Sad%20Anime.jpg?alt=media&token=0df7a407-3206-4a1c-b4d1-f3940f647506",
        authorId: 114,
      },
      {
        id: 130,
        name: "Fendom Contract",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "1000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FFendom%20Contract.png?alt=media&token=660f3d04-bfb4-4551-9648-9cf2875e3399",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FFendom%20Contract.png?alt=media&token=660f3d04-bfb4-4551-9648-9cf2875e3399",
        authorId: 114,
      },
      {
        id: 131,
        name: "Genji",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FGenji.jpg?alt=media&token=e72e8d1f-f00b-433f-a7cb-5a386152407b",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FGenji.jpg?alt=media&token=e72e8d1f-f00b-433f-a7cb-5a386152407b",
        authorId: 114,
      },
      {
        id: 132,
        name: "Japanese Art",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FJapanese%20Art.jpg?alt=media&token=bacb9551-707e-4d5d-b7f4-00af5fd73b27",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FJapanese%20Art.jpg?alt=media&token=bacb9551-707e-4d5d-b7f4-00af5fd73b27",
        authorId: 115,
      },
      {
        id: 133,
        name: "La Santa de las Vendas",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "5000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLa%20Santa%20de%20las%20Banditas.jpg?alt=media&token=c98a7134-192c-4d06-8272-5352d9a775cd",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLa%20Santa%20de%20las%20Banditas.jpg?alt=media&token=c98a7134-192c-4d06-8272-5352d9a775cd",
        authorId: 115,
      },
      {
        id: 134,
        name: "Loolipop Fantasy",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "130",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLolipop%20fantasy.jpg?alt=media&token=4c87ee14-e673-4930-8b86-edd077316403",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FLolipop%20fantasy.jpg?alt=media&token=4c87ee14-e673-4930-8b86-edd077316403",
        authorId: 115,
      },
      {
        id: 135,
        name: "N'Zoth the Corruptor",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "289",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FN'Zoth%20the%20Corruptor.jpg?alt=media&token=6075c484-229d-4031-9979-05244d329be9",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FN'Zoth%20the%20Corruptor.jpg?alt=media&token=6075c484-229d-4031-9979-05244d329be9",
        authorId: 115,
      },
      {
        id: 136,
        name: "Necrotic Dragon",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "579",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNecrotic%20Dragon.jpg?alt=media&token=0b0522b4-e469-4ace-be71-38d9e7dee8a1",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNecrotic%20Dragon.jpg?alt=media&token=0b0522b4-e469-4ace-be71-38d9e7dee8a1",
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
        name: "Nega Nemo",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "300",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNega%20Nemo.jpg?alt=media&token=510601ea-7253-4a4e-9798-3fda19a275fd",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNega%20Nemo.jpg?alt=media&token=510601ea-7253-4a4e-9798-3fda19a275fd",
        authorId: 115,
      },
      {
        id: 139,
        name: "Niki Nicole Cyberpunk",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "458",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNiki%20Nicole%20CyberPunk.jpg?alt=media&token=1cfff7dd-f0da-4f1f-9a3c-3e01d479e20e",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FNiki%20Nicole%20CyberPunk.jpg?alt=media&token=1cfff7dd-f0da-4f1f-9a3c-3e01d479e20e",
        authorId: 115,
      },
      {
        id: 140,
        name: "Sad Punk",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "2000",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FSad%20Punk.jpg?alt=media&token=4cd853b1-cde1-45eb-9269-db529618ed13",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FSad%20Punk.jpg?alt=media&token=4cd853b1-cde1-45eb-9269-db529618ed13",
        authorId: 116,
      },
      {
        id: 141,
        name: "Sindragosa",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "340",
        available: true,
        fileLink:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FSindragosa.jpg?alt=media&token=1cc500fb-fc6e-45fd-a388-172823cd5325",
        preview:
          "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FSindragosa.jpg?alt=media&token=1cc500fb-fc6e-45fd-a388-172823cd5325",
        authorId: 116,
      },
      {
        id: 142,
        name: "Yogg Saron",
        description:
          "simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno",
        price: "576",
        available: true,
        fileLink: "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FYogg-Saron.jpg?alt=media&token=1e733702-5226-4cd1-88da-fa082a11f509",
        preview: "https://firebasestorage.googleapis.com/v0/b/e-commerce-digitalart.appspot.com/o/pictures%2FYogg-Saron.jpg?alt=media&token=1e733702-5226-4cd1-88da-fa082a11f509",
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
