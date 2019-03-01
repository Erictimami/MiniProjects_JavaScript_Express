var express = require('express');
console.log("let's find out what express is ", express);
var app = express();
console.log("Let's find out what app is ", app)

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

app.listen(8000, function(){
    console.log('Listening on port 8000');
});
