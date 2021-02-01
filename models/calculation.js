"use strict";
const { Model } = require("sequelize");
const User = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Calculation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const userAssociation = this.belongsTo(models.User);
    }
  }

  Calculation.init(
    {
      shape: { type: DataTypes.STRING, allowNull: false },
      area: { type: DataTypes.FLOAT, allowNull: false },
      UserId: {
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
