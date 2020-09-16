var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

// exec in paraller
Promise.race([
  delay(5),
  console.log("5"),
  delay(2),
  console.log("2"),
  delay(3),
  console.log("3"),
  delay(5),
])
  .then(() => readdir(__dirname))
  .then(console.log);
