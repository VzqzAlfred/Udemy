const exec = require('child_process').exec;

exec("node -v", (err, out) => {
    if(err){
        throw err;
    }

    console.log(out);
});