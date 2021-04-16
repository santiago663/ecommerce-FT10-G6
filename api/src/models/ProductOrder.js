const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('products_orders', {
      price: {
      type: DataTypes.NUMERIC(50,2),
      allowNull: false,
    }
  },
  {
   timestamps: false,
  //  paranoid: true (esto se usa para usar el destroy, pero no lo borra de la db)
  //  charset: 'utf8',
  //  collate: 'utf8_general_ci', 
  });
};
