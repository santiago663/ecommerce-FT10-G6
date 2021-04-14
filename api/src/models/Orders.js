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
    },
    timestamps: true,
    //  paranoid: true (esto se usa para usar el destroy, pero no lo borra de la db)
    //  charset: 'utf8',
    //  collate: 'utf8_general_ci',     
    })
}