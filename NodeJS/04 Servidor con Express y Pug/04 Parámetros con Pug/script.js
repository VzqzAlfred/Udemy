const express = require('express'),
    app = express(),
    pug = require('pug');

app.use(express.static(__dirname+"/public"))

app.get("/", (req, res) => {
    // res.send("index.html");
    res.render('index.pug', {
        title: "Welcome Batman!",
        text: "Batman Arkham City",
        image: "batman.jpg"
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});