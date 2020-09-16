const EventEmitter = require("events");

class MyEmitter {
  // Add any custom methods here

  constructor() {
    this.listeners = {};
  }
  // Attach event listener
  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }
  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    //console.log("lis: ", this.listeners);
    return this;
  }
  // Fire the event
  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }
}

const myEmitter = new MyEmitter();

myEmitter.addListener("event", () => {
  console.log("an event occurred!");
});

myEmitter.addListener("push", () => {
  console.log("a push occurred!");
});

console.log("--------");

myEmitter.addListener("hello", () => {
  console.log("hello world");
});
myEmitter.emit("event");
// myEmitter.emit("event");
