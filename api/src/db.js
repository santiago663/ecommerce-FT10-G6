require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products, Categories, Authors, Series} = sequelize.models;

Products.belongsToMany(Categories, { through: "products_categories"});
Categories.belongsToMany(Products,{ through: "products_categories"});
///dataTypes.ARRAY(dataTypes.STRING)

Series.hasMany(Products, {as: "products"});
Products.belongsTo(Series,{ 
  foreignKey: "seriesId",
  as: "series"
});


Authors.hasMany(Products, {as: "products"});
Products.belongsTo(Authors,{ 
  foreignKey: "authorsId",
  as: "authors"
});

// -->>> MODELOS AUN PAR ARMAR, PARA QUIEN QUIERA HACERLO BY EDITH

// Order-user - OneToMany
// User.hasMany(Order, {as: "orders"});
// Order.belongsTo(User,{ 
//   foreignKey: "userId",
//   as: "user"
// });

// Order-product - ManyToMany
// Order.belongsToMany(Product, { 
//   through: {model: "order_prod"},
//   as: "product",
// });
// Product.belongsToMany(Order,{ 
//   through: "order_prod"
// });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
