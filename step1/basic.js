const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world ");
});

app.get("/fast", (req, res) => {
  res.send("this was fast");
});

app.listen(3000);
