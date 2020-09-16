var logUpdate = require("log-update");
var toX = () => "X";

var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  // delay(9),
  // delay(10),
  // delay(3),
  // delay(5),
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }

  graphTasks() {
    var { todo, running, complete } = this;
    console.log(
      `while loop in todo: ${this.todo.length} running: ${this.running.length} complete: ${this.complete.length} `
    );
    console.log("-----------------------------");
    //   logUpdate(`

    //  todo: [${todo.map(toX)}]
    //  running: [${running.map(toX)}]
    //  complete: [${complete.map(toX)}]

    //   `);
  }

  run() {
    console.log("start", this.runAnother);
    while (this.runAnother) {
      // console.log(
      //   `while loop in todo: ${this.todo.length} running: ${this.running.length} complete: ${this.complete.length} `
      // );
      var promise = this.todo.shift();
      console.log(1);
      promise.then(() => {
        console.log(4);
        //console.log("inside promise", this.runAnother);
        this.complete.push(this.running.shift());
        this.graphTasks();

        this.run();
      });
      console.log(2);
      //console.log("outside promise", this.runAnother);
      this.running.push(promise);
      this.graphTasks();
    }
    console.log(3);
    //console.log("out promise", this.runAnother);
    this.graphTasks();
  }
}

var delayQueue = new PromiseQueue(tasks, 1);
delayQueue.run();
