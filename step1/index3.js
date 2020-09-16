//pmprocess.env.UV_THREADPOOL_SIZE = 1;

const express = require("express");
const app = express();
const crypto = require("crypto");

const cluster = require("cluster");
const Worker = require("webworker-threads").Worker;

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  //doWork(5000);
  const start = Date.now();

  const worker = new Worker(function () {
    this.onmessage = function () {
      let count = 0;
      while (count < 10) {
        // 10^9
        count++;
      }
      postMessage(count);
    };
  });
  worker.onmessage = function (message) {
    console.log(message.data);
    res.send("" + message);
  };

  worker.postMessage = function () {};
});

app.get("/fast", (req, res) => {
  res.send("this was fast");
});

app.listen(3001);

//
//pm2 start index2.js -i 0
//pm2 list
//pm2 monit
//pm2 delete index2
//ab -c 6 -n 6 localhost:3001/
