const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
    
    sequelize.define('orders',{
        
    date: {
        type: DataTypes.DATE,
    },
    total: {
        type: DataTypes.NUMERIC(50,2),
        allowNull: false,
    },
    state: {
        type: DataTypes.ENUM(["open", "pending", "cancelled", "completed", "loading"]),
        allowNull: true,
    },
    payment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },     
    })
}