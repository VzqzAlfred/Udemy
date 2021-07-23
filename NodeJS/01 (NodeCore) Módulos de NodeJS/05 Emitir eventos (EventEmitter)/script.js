// const events = require("events").EventEmitter,
//       emisor = new events.EventEmitter();
    
// emisor.on('miEvento', (message, status) => {
//     console.log(status, message);
// })

// emisor.emit('miEvento', "Hola", 200);

const EventEmitter = require('events').EventEmitter;
const util = require('util');
const Mascota = function(name){
        this.name = name;
    };

util.inherits(Mascota, EventEmitter);

const canel = new Mascota("Canel");

canel.on('say', function(say){
    console.log(this.name + " say: " + say);
});

canel.emit('say', "Gau, gau")