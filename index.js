const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/calculator.html');
});

app.post("/", function(req, res){
    var n1 = parseFloat(req.body.num1);
    var n2 = parseFloat(req.body.num2);
    var result = n1 + n2;
    res.send(`<h1>Result: ${result}</h1>`);
});

app.listen(4000, function(){
    console.log("The server has been started on port 4000!");
});
