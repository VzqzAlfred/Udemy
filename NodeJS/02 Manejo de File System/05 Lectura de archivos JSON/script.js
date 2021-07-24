const fs = require('fs'),
    heroes = require('./heroes.json');

// console.log(heroes.justiceleague);

// for (let i = 0; i < 5; i++) {
//    console.log(heroes.justiceleague);
// }

fs.readFile("./heroes.json", (err, datos) => {
    console.log(JSON.parse(datos));
});