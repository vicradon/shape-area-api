const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shapes Area API",
      version: "0.1.0",
      description: "An API for computing the area of different shapes",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Osinachi Chukwujama",
        url: "https://osinachi.me",
        email: "osinachi.chukwujama@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [
    "./docs/routes/auth.js",
    "./docs/routes/calculation.js",
    "./docs/models/user.js",
  ],
};

module.exports = swaggerJsdoc(options);
