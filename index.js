// const lib = require("./lib.js");
const fs = require("fs");

fs.mkdirSync("dir");

fs.writeFileSync("bioo.txt", "some test here");

const data = fs.readFileSync("bioo.txt", "utf-8");

console.log(data);

fs.appendFileSync("bioo.txt", "more data here");

fs.renameSync("./bioo.txt", "./bio.txt");

fs.unlinkSync("./bio.txt");

// Above is CRUD

// this is synchronous, & to write a file it needs some time
// inbetween this time our server is not blocked, so make it asynchronous

// console.log(lib.sum(4, 5), lib.diff(7, 9));
