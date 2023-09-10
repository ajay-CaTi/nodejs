const lib = require("./lib.js");
const fs = require("fs");

const text = fs.readFileSync("demo.txt", "utf-8");
console.log(text);

// this is synchronous, & to read a file it needs some time
// inbetween this time our server is not blocked so make it asynchronous

console.log(lib.sum(4, 5), lib.diff(7, 9));
