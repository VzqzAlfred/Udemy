const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead("200", {"Content.type" : "text/html"});

    res.end(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>Page</title>
                </head>
                <body>
                    <h1>Page with Server HTTP</h1>
                    <h2>${req.url}</h2>
                    <h2>${req.method}</h2>
                </body>
            </html>
    `);
});

server.listen(3000);

console.log("Server running at http://localhost:3000");