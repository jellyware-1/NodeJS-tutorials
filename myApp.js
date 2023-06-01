let express = require('express');
let app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/", () => express.static(__dirname + "/public"));

module.exports = app;