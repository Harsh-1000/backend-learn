//Events Module 
// Node.js has a built-in module, called "Events"
// where you can create-, fire-, and listen for- your own events

// Ex 1 - Registering for the event to be fired only one time using once.
// Ex 2 - Create an event emitter instance and register a couple of callbacks
//Ex 3 - Registering for the event with callback parameters

// const event = require("events");
// or
const EventEmitter = require("events"); //creating a class with help of events module
const event = new EventEmitter();


// event.on('sayMyName',()=>{
    
//     console.log("dekh raha he binod");
// });

// event.on('sayMyName',()=>{
    
//     console.log("dekh raha he binod ke bhai");
// });

// event.on('sayMyName',()=>{
    
//     console.log("dekh rahi he binod ki bahena");
// });

// event.emit('sayMyName');

event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkpage",200,"ok");





