const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
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
        allowNull: true,
      },
      phone_Number: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      profilePic: {
          type: DataTypes.STRING,
          allowNull: true
      },
      authyId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      authy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }      
    },
    {
      timestamps: false,
      //  charset: 'utf8',
      //  collate: 'utf8_general_ci',
    }
  );
};
