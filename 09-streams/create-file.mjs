// How to run program: node createfile.mjs <filename> <linesQty>
import fs from "fs";
import path from "path";
if (!process.argv[2] || !process.argv[3]) {
  console.log(
    "Please provide a file name and qty of lines to create the file.  Example: node create-file.mjs file.txt 1000"
  );
  process.exit(0);
}

const fileName = process.argv[2];
const qty = parseInt(process.argv[3]);
if (isNaN(qty)) {
  console.log("Please provide a valid number for qty of lines.");
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join("./files", fileName));
console.log("Start", performance.now());
for (let i = 0; i < qty; i++) {
  writeStream.write(`Line ${i + 1}\n`);
}

console.log("End", performance.now());
setTimeout(() => {
  console.log("Timeout", performance.now());
}, 0);
writeStream.end(() => console.log(`File ${fileName} with ${qty} created successfully!`));
