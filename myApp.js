require('dotenv').config();
let bodyParser = require('body-parser');

let express = require('express');
let app = express();

//passing middleware into app.use
//to pass the post data
app.use(bodyParser.urlencoded({"extended": false}));

//works on all request - logs method, path accessed + IP address of requester
app.use((req, res, next) => {
    console.log(req.method + " " + req.path  + " - " + req.ip);
    next();
})

//sends file when at root
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));


//middle ware - when public accesed - sends contents of static file
app.use("/public", express.static(__dirname + "/public"));

//defining middle ware and handler in same route definition
//attaches the time to the request
//sends the time in json format
app.get("/now", function(req, res, next){
    req.time = (new Date()).toString();
    next();
}, function(req, res){
    res.json({"time": req.time});
}
)

//environment variables
//output upper case depending on the environemtn variables set
app.get("/json", (req, res)=>{
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE == "uppercase"){
        message = message.toUpperCase();
        res.json({message});
    }
    else{
        res.json({message});
        
    }
});

//echo server - takes a word and responds with the same word in JSON
app.get("/:word/echo", function(req, res){
    res.json({"echo": req.params.word});
})

//uses query string
//handles get request - if using the link
//handles post request - from form
app.route("/name").get(function(req, res){
    res.json({"name": (req.query.first + " " + req.query.last)});
}).post(function(req, res){
    res.json({"name": (req.body.first + " " + req.body.last)});
});

module.exports = app;