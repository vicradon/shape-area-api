"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Calculation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Calculation.init(
    {
      shape: { type: DataTypes.STRING, allowNull: false },
      result: { type: DataTypes.FLOAT, allowNull: false },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Calculation",
    }
  );
  return Calculation;
};
