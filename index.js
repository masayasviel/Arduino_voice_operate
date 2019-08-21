const express = require("express");
const five = require("johnny-five");
const board = new five.Board({port:"COM3"});

const app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

let led;

board.on('ready', function() {
    led = new five.Led(12);
});

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        content: "認識したものをここに表示",
    });
});

app.post("/", (req, res)=>{
    if(req.body.ope_data == "つける"){
        led.on();
    }
    if(req.body.ope_data == "消える"){
        led.off();
    }
    res.render("index.ejs",{
        content: req.body.ope_data,
    });
});

const server = app.listen(3000, ()=>console.log("server start"));