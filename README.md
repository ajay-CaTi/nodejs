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

# Node.js Streams

Streams are objects that let you read data from a source or write data to a
destination in continuous fashion. In Node.js, there are four types of streams -
Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later
Readable- Stream which is used for read operation..
Writable- Stream which is used for write operation.
Duplex - Stream which can be used for both read and write operation.
Transform - A type of duplex stream where the output is computed based on input.

# ACG Player

Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are -
data- This event is fired when there is data is available to read.
end- This event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish- This event is fired when all the data has been flushed to underlying system

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/nodejs.git
git push -u origin main
