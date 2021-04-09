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
  });
  
};
