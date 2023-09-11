// Events
// Node.js have built in modules called Events
// where you can create, fire, listen for your own events.
//

// EventEmitter cteate object with class
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("Name:- Ajay");
});

event.on("sayMyName", () => {
  console.log("Name:- Kumar");
});

event.on("sayMyName", () => {
  console.log("Name:- Singh");
});

event.emit("sayMyName");
