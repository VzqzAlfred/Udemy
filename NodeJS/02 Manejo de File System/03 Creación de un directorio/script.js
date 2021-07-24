const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout),
    fs = require('fs'),
    path = require('path');
let dir = "Pending";

if(fs.existsSync(dir)){
    console.log("The package already exists \n");
} else {
    fs.mkdir(dir, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("The Package has been created. \n");
        }
    });
}

rl.question("Give the date (YYYYMMDD) \n", data => {
    let file = path.join(__dirname, dir, data + ".txt");

    fs.writeFileSync(file,"Pending for the day: " + data + "\n");
    rl.setPrompt("Pending for the day or finished: ");
    rl.prompt();
    rl.on("line", pendiente => {
        fs.appendFileSync(file, pendiente.trim()+"\n");

        if(pendiente.toLowerCase().trim() === "finished"){
            rl.close();
        } else {
            rl.setPrompt("Pending for the day or finished: ");
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\n See You!`);
    process.exit();
});