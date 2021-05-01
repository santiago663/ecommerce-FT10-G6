const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{    
    sequelize.define('wishlists',{ 
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
    })
}