//pmprocess.env.UV_THREADPOOL_SIZE = 1;

const express = require("express");
const app = express();
const crypto = require("crypto");

const cluster = require("cluster");

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  //doWork(5000);
  const start = Date.now();
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("crypto:", Date.now() - start);
    res.send("hello world ");
  });
});

app.get("/fast", (req, res) => {
  res.send("this was fast");
});

app.listen(3000);

//
//pm2 start index2.js -i 0
//pm2 list
//pm2 monit
//pm2 delete index2
