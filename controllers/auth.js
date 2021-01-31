const Joi = require("joi");
const { User, Token } = require("../models");
const jwt = require("jsonwebtoken");

class AuthController {
  async signup(req, res, next) {
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

      const jwtValue = jwt.sign({ user: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      const token = Token.build({ jwt: jwtValue });
      token.UserId = user.id;
      await token.save();

      return res.status(200).json({
        user,
        message: "Signed up successfully",
      });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(400).send("User with this email already exists");
      }
      return res.send(error.message);
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

      const jwtValue = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        jwtValue,
        message: "logged in successfully",
      });
    } catch (error) {
      return res.send(error.message);
    }
  }
  async updatePassword(req, res, next) {
    return res.send("boy");
  }
}

module.exports = new AuthController();
