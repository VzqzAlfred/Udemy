const exec = require('child_process').exec;

exec("node -v", (err, out) => {
    if(err){
        throw err;
    }

    console.log(out);
});


const interval = setInterval(() => {
    let numbers = "";
    for (let i = 0; i < 7; i++) {
        numbers += Math.floor((Math.random()*10 + 1)) + " ";
    }
    process.stdout.write(numbers + "\n")

}, 1000);