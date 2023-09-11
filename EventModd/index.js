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

event.on("checkPage", (sc, msg) => {
  console.log(`This is checkpage ${sc} ${msg}`);
});

event.emit("sayMyName", 200, "ok");
event.emit("checkPage", 200, "ok");
