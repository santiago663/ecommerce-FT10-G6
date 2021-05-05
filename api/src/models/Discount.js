const { DataTypes } = require( "sequelize" );

module.exports = (sequelize) => {
    sequelize.define( "discounts", {
        percent: {
           type: DataTypes.DECIMAL(3,0)
        },
    })
}