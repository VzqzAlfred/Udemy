const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout),
    fs = require('fs');


rl.question("Give the date (YYYYMMDD)", data => {
    fs.writeFileSync(data + ".txt", "Dates this weekend:" + data + "\n");
    rl.setPrompt("Date waiting or end:");
    rl.prompt();
    rl.on("line", pendiente => {
        fs.appendFileSync(data+".txt", pendiente.trim()+"\n");

        if(pendiente.toLowerCase().trim() === "end"){
            rl.close();
        } else {
            rl.setPrompt("Date waiting or end:");
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\n See You!`);
    process.exit();
});