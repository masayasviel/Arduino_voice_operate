const express = require("express");
const five = require("johnny-five");
const board = new five.Board({port:"COM3"});

const app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

let led;

board.on('ready', function() {
    led = new five.Led.RGB({
        pins: {
            red: 6,
            green: 5,
            blue: 3
        }
    });
});

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        content: "認識したものをここに表示",
    });
});

app.post("/", (req, res)=>{
    switch(req.body.ope_data){
        case "赤色":
            led.color("FF0000");
            break;
        case "桃色":
            led.color("FF00FF");
            break;
        case "黄色":
            led.color("FFFF00");
            break;
        case "緑色":
            led.color("00FF00");
            break;
        case "青色":
            led.color("0000FF");
            break;
        case "紫":
            led.color("4B0082");
            break;
        case "つける":
            led.color("FFFFFF");
            break;
        case "消える":
            led.off();
            break;
    }
    res.render("index.ejs",{
        content: req.body.ope_data,
    });
});

const server = app.listen(3000, ()=>console.log("server start"));