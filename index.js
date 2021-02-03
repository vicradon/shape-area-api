const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpecs = require("./swagger-specs");
const authRouter = require("./routes/auth");
const calculationRouter = require("./routes/calculation");
const { isAuthenticated } = require("./middleware/auth");
const { errorHandler } = require("./middleware/error");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/calculations", isAuthenticated, calculationRouter);

app.get("/", (res) => {
  res.send("<h1>Hi there, welcome to your app</h1>");
});

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
