const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.TIME,
      },
      season: {
        type: DataTypes.ENUM,
        values: ["summer", "autumn", "winter", "spring"],
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
