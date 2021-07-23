const readline = require('readline'),
    rl = readline.createInterface({input: process.stdin,
    output: process.stdout});
let num = Math.floor((Math.random()*10+1)),
    lim = 4,
    try_ = 1;

rl.question("What's the number between 1 and 10: ", answer => {
    // console.log(answer);
    try_++;
    if(answer.trim() === num){
        rl.close();
    } else {
        rl.setPrompt(`Try again: `);
        rl.prompt();
        rl.on('line', answer => {
            if(answer.trim() === num){
                rl.close();
            } else {
                try_++;
                if(try_ < lim){
                    rl.setPrompt(`Try again: `);
                    rl.prompt();
                } else{
                    rl.close();
                }
            }
        })
    }
});

rl.on('close', () => {
    console.log(`The number is: ${num}`);
})