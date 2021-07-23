const path = require('path');

// console.log(process.stdout)
// process.stdout.write("Ejecutando stdout en Process.");

const asks = [
    "What's your name?", 
    "What's your surname"
];

const answers = [];

const ask = i => {
    process.stdout.write(`\n ${asks[i]}`);
    process.stdout.write(`: `)
}

process.stdin.on("data", data => {
    // process.stdout.write(`\n ${data.toString().trim()} \n`);
    answers.push(data.toString().trim());
    if(answers.length < asks.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    process.stdout.write(`See you! ${answers[0]} ${answers[1]} \n`);
})

ask(0);