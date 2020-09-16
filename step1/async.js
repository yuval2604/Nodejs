const https = require("https");

const start = Date.now();

function doReq(num) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {
        //console.log("1: ", Date.now() - start);
      });
      res.on("end", () => {
        console.log("%s: ", num, Date.now() - start);
      });
    })
    .end();
}

doReq(1);

doReq(2);

doReq(3);

doReq(4);

doReq(5);
