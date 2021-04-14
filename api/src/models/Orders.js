const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
    
    sequelize.define('orders',{
    customer_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
    },
    total: {
        type: DataTypes.DECIMAL(2,22),
        allowNull: false,
    }
        
    })
}