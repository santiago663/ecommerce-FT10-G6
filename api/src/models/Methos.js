const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'methods',
		{
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			available: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
		},
		{
			timestamps: false,
			//  charset: 'utf8',
			//  collate: 'utf8_general_ci',
		}
	);
};
