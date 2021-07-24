const fs = require('fs'),
    stream = fs.createReadStream("./lorem.txt", "UTF-8");

// let file = fs.readFileSync("./lorem.txt");

let txt = "";

stream.once("data", () => {
    console.log(`Start load`);
});

stream.on("data", (chonck) => {
    console.log(`Characters read: ${chonck.length}`);
    txt += chonck;
})


stream.on("end", () => {
    console.log(`Text read: ${txt.length}`);
});

