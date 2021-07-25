const http = require('http'),
    fs = require('fs');

http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-type" : "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST"){
        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", () => {
            res.writeHead(200, {"Content-type" : "text/html"});

            res.end(data)
        });
    }
}).listen(3000);

console.log("Server running at http://localhost:3000");