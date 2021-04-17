const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  sequelize.define('roles', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      timestamps: true,
      paranoid: true
      //  charset: 'utf8',
      //  collate: 'utf8_general_ci', 
    });
};
