import EventEmitter from "events";
import fs from "fs";
const fileEmitter = new EventEmitter();

const filePath = "./first.txt";
fileEmitter.on("writeComplete", () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, "\nOne more line", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("renameComplete", () => {
  console.log(`File ${filePath} was renamed`);
});

fileEmitter.on("appendComplete", () => {
  console.log(`File ${filePath} was appended`);
  fs.rename(filePath, "./first-renamed.txt", () => {
    fileEmitter.emit("renameComplete");
  });
});

fs.writeFile(filePath, "First file text", () => {
  fileEmitter.emit("writeComplete");
});
