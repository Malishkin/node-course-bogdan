let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log("This will not block the event loop"));
while (isRunning) {
  console.log("This will block the event loop");
} // This will block the event loop
