const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end("Hello form node");
});

server.listen(PORT, "127.1.1.0", () => {
  console.log(`listening to port ${PORT}`);
});
