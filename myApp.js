require('dotenv').config();

let express = require('express');
let app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));

console.log(process.env.MESSAGE_STYLE);

app.get("/json", (req, res)=>{
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json(message.toUpperCase());
    }
    else{
        res.json(message);
        
    }
});

module.exports = app;