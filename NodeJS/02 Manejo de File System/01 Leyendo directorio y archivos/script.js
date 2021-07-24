const fs = require('fs'),
    path = require('path');

/* De manera Sincrona */
// let files = fs.readdirSync("./");
// console.log(files);


/* De manera Asíncrona */
fs.readdir("./", (err, files) => {
    if(err){
        throw err;
    }
    else {
        console.log(files);
    }
});

console.log(`Reading director's files`);


fs.readdir("./files", (err, files) => {
    
    files.forEach((file) => {
        let file_ = path.join(__dirname, "files", file),
            datas = fs.statSync(file_);
        // console.log(files_, datas);

        if(datas.isFile() && files !== ".DS_Store"){
            fs.readFile(file_, "UTF-8", (err, data) => {
                console.log(data);
                console.log("/********************************/");
            });
        }
    });
});