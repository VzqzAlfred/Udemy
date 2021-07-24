const fs = require('fs');


// De forma síncrona.
// try {
//     fs.renameSync("./package.json", "./package.txt");
// } catch (error) {
//     console.log(error);
// }


// De forma asíncrona
// fs.rename("./lock.json", "lock.txt", err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Files rename");
//     }
// });


// Sincrona
// try {
//     fs.unlinkSync("./lock.txt");
// } catch (error) {
//     console.log(err);   
// }


// Asincrona
fs.unlink("lock.txt", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted");
    }
});