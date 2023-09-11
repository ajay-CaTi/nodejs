const fs = require("fs");

const bioData = {
  name: "ajay",
  age: 26,
  what: "hi coll bro",
};

const st = JSON.stringify(bioData);
// console.log(st);

// fs.writeFile("obj.json", st, (err) => {
//   console.log("File created, Data added");
// });

fs.readFile("obj.json", "utf-8", (err, data) => {
  console.log(data);
  const da = JSON.parse(data);
  console.log(da);
});
