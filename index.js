// const lib = require("./lib.js");
const fs = require("fs");

// fs.writeFileSync("demo.txt", "SOme one is in school");

// fs.appendFileSync("demo.txt", "He ye awesome");

const data = fs.readFileSync("demo.txt", "utf-8");

fs.renameSync("demo.txt", "demodemo.txt");

console.log(data);

// this is synchronous, & to write a file it needs some time
// inbetween this time our server is not blocked, so make it asynchronous

// console.log(lib.sum(4, 5), lib.diff(7, 9));
