const fs = require("fs");

try {
  fs.writeFileSync("./first.txt", "First file text");
  console.log("File first.txt was prepeared");
  fs.appendFileSync("./first.txt", "\nOne more line");
  console.log("Text to the first.txt was appended");
  fs.renameSync("./first.txt", "./renamed-first.txt");
  console.log("File first.txt was renamed to renamed-first.txt");
} catch (err) {
  console.log(err);
}
// Output:  File first.txt was prepeared

// Text to the first.txt was appended

//File first.txt was renamed to renamed-first.txt
