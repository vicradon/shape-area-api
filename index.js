const express = require("express");
const app = express();
require("dotenv").config();
const authRouter = require("./routes/auth");
const calculationRouter = require("./routes/calculation");
const { isAuthenticated } = require("./helpers/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/calculations", isAuthenticated, calculationRouter);

app.get("/", (res) => {
  res.send("<h1>Hi there, welcome to your app</h1>");
});

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(403).send(err.message);
  }
  return res.status(500).send(err.message);
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
