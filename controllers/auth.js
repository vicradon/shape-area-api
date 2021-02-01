const Joi = require("joi");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

class AuthController {
  async signup(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(30).required(),
    });
    try {
      const { email, password } = await schema.validateAsync({
        email: req.body.email,
        password: req.body.password,
      });
      const user = User.build({
        email,
        password,
      });
      await user.save();

      const jwtValue = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        user,
        token: jwtValue,
        status: "success",
        message: "Signed up successfully",
      });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({
          message: "User with this email already exists",
          status: "error",
        });
      }
      return res.status(500).json({ message: error.message, status: "error" });
    }
  }
  async login(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(30).required(),
    });
    try {
      const { email, password } = await schema.validateAsync({
        email: req.body.email,
        password: req.body.password,
      });
      const user = await User.findOne({ where: { email } });

      const jwtValue = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        token: jwtValue,
        status: "success",
        message: "logged in successfully",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message, status: "error" });
    }
  }
}

module.exports = new AuthController();
