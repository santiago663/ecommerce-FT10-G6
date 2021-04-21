const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("reviews",{ 

    comment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
 })
}