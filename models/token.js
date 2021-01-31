"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const userAssociation = this.belongsTo(models.User);
    }
  }
  Token.init(
    {
      jwt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Token",
    }
  );

  return Token;
};
