import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("myEvent", () => {
  console.log("First event listener");
});

myEmitter.on("myEvent", () => {
  console.log("Second event listener");
});

myEmitter.on("otherEvent", () => {
  console.log("Other event listener");
});
myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners()); // Output: 10

console.log(myEmitter.eventNames()); // Output: []
setTimeout(() => {
  myEmitter.emit("myEvent");
}, 1000);
// Output:
// First event listener
// Second event listener
