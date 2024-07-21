import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const filePath = "./files/index.html";
  //with stream
  if (req.url === "/" && req.method === "GET") {
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    readStream.pipe(res);
  }
  //without stream we read entire file and send it to the client
  if (req.url === "/no-stream" && req.method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
