const fs = require("fs/promises");

fs.writeFile("./first.txt", "First file text")
  .then(() => {
    console.log("File first.txt was prepeared");
    fs.appendFile("./first.txt", "\nOne more line");
  })
  .then(() => {
    console.log("Text to the first.txt was appended");
    fs.rename("./first.txt", "./renamed-first.txt");
  })
  .then(() => {
    console.log("File first.txt was renamed to renamed-first.txt");
  })
  .catch((err) => {
    console.log(err);
  });
