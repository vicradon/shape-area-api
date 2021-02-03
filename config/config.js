const DATABASE_URL = process.env.DATABASE_URL;
require("dotenv").config();
const UrlParse = require("url-parse");
const { username, password, database, host } = UrlParse(DATABASE_URL);

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_TEST_HOST,
    dialect: "postgres",
  },
  production: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
};

module.exports = config;
