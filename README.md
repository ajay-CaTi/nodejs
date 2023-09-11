# Node

# Synchronous module

const text = fs.readFileSync("demo.txt", "utf-8");
console.log(text);

// this is synchronous, & to read a file it needs some time
// inbetween this time our server is not blocked so make it asynchronous

# Remove Directory

rmdir dir

# Add folder/directory

mkdir dir

# JSON

- JSON light weight
- format for string and transporting data
- JSON is used when data is sent form a server to web page

# JSON data into js object

# JSON.parse()

When receiving data from a web server, the data is in string. Parse the data with JSON.parse() , and the data becomes a JavaScript object

# JSON.stringify()

JSON.stringify() static method converts a JavaScript value to a JSON string

# API

api is a srvice which allows to request data.
it allows software to communicates to eah other.

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/nodejs.git
git push -u origin main
