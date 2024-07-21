import fs from "fs";
import path from "path";

const sourceDir = "./files";

const destinationDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source directory ${sourceDir} does not exist`);
  console.log("Exiting...");
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
  console.log(`Removed existing destination directory ${destinationDir}`);
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.error("Error reading source directory", err);
    process.exit(1);
  }
  console.log("Start", performance.now());
  fileNames.forEach((fileName, index) => {
    const soureceFilePath = path.join(sourceDir, fileName);
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`
    );

    const readStream = fs.createReadStream(soureceFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      console.log(`Write stream for ${fileName} copied successfully`);
    });
  });
  console.log("End", performance.now());
});
