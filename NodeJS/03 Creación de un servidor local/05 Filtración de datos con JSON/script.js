const http = require('http'),
    data = require('./heroes.json');

const filterJL = (res) => {
    res.end(JSON.stringify(data.justiceleague));
}

const filterA = (res) => {
    res.end(JSON.stringify(data.avenger));
}


http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-type" : "text/json"});
        res.end(JSON.stringify(data));
    } else if(req.url === "/justiceleague"){
        filterJL(res);
    } else if(req.url === "/avenger") {  
        filterA(res);
    } else {
        res.writeHead(404, {"Content-type" : "text/plain"});
        res.end("Page Not Found");
    }
}).listen(3000);

console.log("Server running at http://localhost:3000");