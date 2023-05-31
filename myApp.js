let express = require('express');
let app = express();

app.get("/", (req, res) => res.send(__dirname + "/views/index.html"));

 module.exports = app;
