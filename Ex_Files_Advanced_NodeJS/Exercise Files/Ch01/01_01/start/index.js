function hideString(str, done) {
  process.nextTick(() => {
    return done(str.replace(/[a-zA-Z]/g, "X"));
  });
}

hideString("Hello World", (hidden) => {
  console.log(hidden);
});

console.log("end");
