const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fileLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preview:{
      type: DataTypes.STRING,
      allowNull: false
    },
    score:{
      type: DataTypes.STRING,
      allowNull: true
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    initialStock:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
   timestamps: false, 
  //  charset: 'utf8',
  //  collate: 'utf8_general_ci', 
  });
  
};
