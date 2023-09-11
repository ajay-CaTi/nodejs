const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello form node");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello form node about");
  } else if (req.url === "/userapi") {
    console.log(`${__dirname}/userAPi`);
    fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("Data fetched see VS code terminal");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello contact");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("No page");
  }
});

server.listen(PORT, "127.1.1.0", () => {
  console.log(`listening to port ${PORT}`);
});
