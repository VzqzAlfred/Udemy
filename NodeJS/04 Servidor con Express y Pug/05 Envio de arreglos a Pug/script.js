const express = require('express'),
    app = express(),
    pug = require('pug');

app.use(express.static(__dirname+"/public"));

const enemies = [
    {
        name: "Ra's Al Ghul",
        author: "By Dennis O'Neil",
        image: "ras.jpg"
    },
    {
        name: "The Joker",
        author: "Bill Finger",
        image: "joker.jpg"
    },
    {
        name: "Harley Quinn",
        author: "Paul Dini",
        image: "harley.jpg"
    },
    {
        name: "Bane",
        author: "Graham Nolan",
        image: "bane.jpg"
    }
]

app.get("/", (req, res) => {
    // res.send("index.html");
    res.render('index.pug', {
        title: "Welcome Batman!",
        text: "Batman Arkham City",
        image: "batman.jpg",
        villains: enemies
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});