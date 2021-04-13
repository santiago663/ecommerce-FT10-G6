const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define("series",{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,   
    }
  },
  {
   timestamps: false, 
  //  charset: 'utf8',
  //  collate: 'utf8_general_ci', 
  });
}
