const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("users",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          phone_Number: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },
          location_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
          },
          role_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
          },
          available: {
              type: DataTypes.BOOLEAN,
              allowNull: false,              
          },                   
    },
    {
    timestamps: false, 
    //  charset: 'utf8',
    //  collate: 'utf8_general_ci', 
    });
};