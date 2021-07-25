const http = require('http'),
    fs = require('fs'),
    path = require('path');


http.createServer((req, res) => {
    console.log(`${req.method} solicitud ${req.url}`);
    
    if (req.url === "/") {
        fs.readFile("./index.html", "UTF-8", (err, html) => {
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(html);
        });
    } else if(req.url.match(/.css$/)) {
        const cssFile = path.join(__dirname, "./", req.url);

        const fileStream = fs.createReadStream(cssFile, "UTF-8");

        fileStream.pipe(res);
    } else if(req.url.match(/.jpg$/)) {
        const image = path.join(__dirname, "./", req.url);

        const fileStream = fs.createReadStream(image);
        res.writeHead(200, {"Content-type" : "image/jpeg"});
        
        fileStream.pipe(res);
    } else {
        res.writeHead(404, {"Content-type" : "text/plain"});
            res.end("Page Not Found!");
    }
}).listen(3000);

console.log("Server running at http://localhost:3000");