import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    fs.readFile("public/index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
  });
