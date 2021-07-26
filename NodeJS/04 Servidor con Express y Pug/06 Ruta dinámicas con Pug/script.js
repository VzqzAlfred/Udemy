var express = require('express'),
    app = express(),
    pug = require('pug');

app.use(express.static(__dirname+"/public"));

var enemies = [
    {
        name: "Ra's Al Ghul",
        author: "Dennis O'Neil",
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
        title: "Welcome Batman to Arkham City!",
        text: "Select an enemies from Arkham City",
        image: "batman.jpg",
        villains: enemies
    });
});

app.get("/enemy/:name", (req, res) => {

    var dataEnemy  = enemies.filter(enemy => {
        if (req.params.name === enemy.name) {
            return enemy;
        }
    })[0];

    res.render('enemy.pug', {
        name: req.params.name,
        data: dataEnemy
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});