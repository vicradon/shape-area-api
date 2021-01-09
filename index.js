const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h1>Hi there, welcome to your app</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
