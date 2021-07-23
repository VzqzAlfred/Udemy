const path = require('path');
let greeting = "Global is the object Global in Node"

// console.log(global);
// console.log(greeting);
// console.log(` __filename: ${__filename} \n`);
// console.log(` __ dirname: ${__dirname} \n`);
// console.log(`El archivo es: '${path.basename(__filename)}' se ejecuta.`);



// console.log(process);
// console.log(process.argv);
console.log(process.argv[0]);
console.log(process.argv[1]);

const search = (argument) => {
    let i = process.argv.indexOf(argument);
    return (i === -1) ? null : process.argv[i+1];
}

let user = search("--u"),
    greet = search("--s");

if (user || greet) {
    console.log(`Welcome ${user}, ${greet}`);
} else {
    console.log("I don't meet you!");
}

// node script --u alfred --s "Good Morning"