"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const userCalculations = models.User.hasMany(models.Calculation);
    }
  }

  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue("password");
        },
      },
      salt: {
        type: DataTypes.STRING,
        get() {
          return () => this.getDataValue("salt");
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.generateSalt = function () {
    return crypto.randomBytes(16).toString("base64");
  };
  User.encryptPassword = function (plainText, salt) {
    return crypto
      .createHash("RSA-SHA256")
      .update(plainText)
      .update(salt)
      .digest("hex");
  };

  const setSaltAndPassword = (user) => {
    if (user.changed("password")) {
      user.salt = User.generateSalt();
      user.password = User.encryptPassword(user.password(), user.salt());
    }
  };
  User.beforeCreate(setSaltAndPassword);
  User.beforeUpdate(setSaltAndPassword);

  return User;
};
