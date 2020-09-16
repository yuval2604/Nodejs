process.env.UV_THREADPOOL_SIZE = 5;

const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doReq() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {
        //console.log("1: ", Date.now() - start);
      });
      res.on("end", () => {
        console.log("HTTP: ", Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash", Date.now() - start);
  });
}

doReq();

fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
