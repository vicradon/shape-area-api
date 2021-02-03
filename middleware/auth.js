const { UnauthorizedError } = require("../helpers/errors");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const jwtVerifyAsync = promisify(jwt.verify);

const isAuthenticated = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new UnauthorizedError();
    }

    const token = req.headers.authorization.split(" ")[1];
    const jwtIsValid = await jwtVerifyAsync(token, process.env.JWT_SECRET);
    if (jwtIsValid) {
      return next();
    }
    return next(new UnauthorizedError());
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuthenticated,
};
