const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
    
    sequelize.define('orders',{
        
    date: {
        type: DataTypes.DATE,
    },
    total: {
        type: DataTypes.DECIMAL(2,2),
        allowNull: false,
    },
     
    })
}