const http = require('http'),
    fs = require('fs'),
    path = require('path');


http.createServer((req, res) => {
    console.log(`${req.method} solicitud ${req.url}`);
    
}).listen(3000);

console.log("Server running at http://localhost:3000");