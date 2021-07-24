const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout),
    fs = require('fs');


rl.question("Give the date (YYYY-MM-DD): ", data => {

    let stream = fs.createWriteStream(data + ".txt");

    stream.write("Pending for today: " + data + "\n");

    //fs.writeFileSync(data + ".txt", "Pending for today: " + data + "\n");
    rl.setPrompt("Pending for today or finished: ");
    rl.prompt();
    rl.on("line", pendiente => {
        
        //fs.appendFileSync(data+".txt", pendiente.trim()+"\n");
        
        if(pendiente.toLowerCase().trim() === "finished"){
            stream.close();
            rl.close();
        } else {
            stream.write(pendiente.trim()+"\n");
            
            rl.setPrompt("Pending for today or finished: ");
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\n See You!`);
    process.exit();
});