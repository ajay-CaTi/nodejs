// const lib = require("./lib.js");
const fs = require("fs");

// fs.mkdirSync("dir");

fs.writeFile("bio.txt", "some text here", (err, data) => {
  console.log(err, data);
});

fs.appendFile("bio.txt", "another text", (err) => {
  console.log(err || "Data is appended in file");
});

fs.readFile("bio.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.appendFile("bio.txt", "Next data", (err) => {
  console.log("added data");
});

fs.rename("bio.txt", "bio.txt", () => {
  console.log("rename done");
});

// fs.unlinkSync("./bio.txt");

// this is synchronous, & to write a file it needs some time
// inbetween this time our server is not blocked, so make it asynchronous

// console.log(lib.sum(4, 5), lib.diff(7, 9));
