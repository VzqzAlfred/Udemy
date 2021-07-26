const express = require('express'),
    app = express();

app.use(express.static(__dirname+"/public"))

app.get("/", (req, res) => {
    res.send("index.html");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});