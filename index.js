const express = require("express");
const app = express();
require("dotenv").config();
const authRouter = require("./routes/auth");
const calculationRouter = require("./routes/calculation");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/calculations", calculationRouter);

app.get("/", (res) => {
  res.send("<h1>Hi there, welcome to your app</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
