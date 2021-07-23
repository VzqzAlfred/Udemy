const spawn = require('child_process').spawn;
let cp = spawn("node", ["script"]);

cp.stdout.on("data", data => {
    console.log(`Lottery: ${data.toString().trim()}`);
});

process.stdin.on("data", data => {
    console.log("Good Luck!");
    process.exit();
});