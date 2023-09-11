const fs = require("fs");

const http = require("http");
const server = http.createServer();

// 1. previous method load data one go
// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });

// 2.
// const rstream = fs.createReadStream("inputs.txt");
// server.on("request", (req, res) => {
//   rstream.on("data", (chunkData) => {
//     res.write(chunkData);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end("File not found");
//   });
// });

// 3.

server.listen("4000", "127.0.0.1", () => {
  console.log("server  running 4000");
});
