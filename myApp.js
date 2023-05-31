let express = require('express');
let app = express();


console.log("Hello World");

app.get("/", function(req, res){
    console.log("inside the response");
    res.send(`

    <html>
        <body style="text-align: center;">
            <h1 style="font-family: 'Courier New', Courier, monospace; font-size: 50px;">HELLO EXPRESS</h1>
        </body>
    </html>
    
    `);
});































 module.exports = app;
