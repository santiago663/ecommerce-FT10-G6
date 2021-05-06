require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const Wishlist = require("./models/Wishlist");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products, Categories, Authors, Series, Users, Orders, Roles, Reviews, Methods, Wishlists, Discounts } = sequelize.models;

// ############################## Relations ###############################

Series.hasMany(Products);
Products.belongsTo(Series);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Users.hasOne(Wishlists);
Wishlists.belongsTo(Users);

Wishlists.belongsToMany(Products, { through: "products_wishlists" });
Products.belongsToMany(Wishlists, { through: "products_wishlists" }); 

Methods.hasMany(Orders);
Orders.belongsTo(Methods); 

Authors.hasMany(Products);
Products.belongsTo(Authors);

Users.hasMany(Orders);
Orders.belongsTo(Users); 

Users.belongsTo(Roles);
Roles.hasMany(Users);

Discounts.belongsTo(Products);
Products.hasOne(Discounts);

Products.belongsToMany(Categories, { through: "products_categories" });
Categories.belongsToMany(Products, { through: "products_categories" });

Products.belongsToMany(Orders, { through: "products_orders" });
Orders.belongsToMany(Products, { through: "products_orders" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
