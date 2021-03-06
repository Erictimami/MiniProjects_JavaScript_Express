// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');//means that the server has to find all the .ejs inside the view folder. 
// very important. we change all the html files to the ejs file.
// require body-parser to be able to use request form by writing request.body
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


// needed to be able to use session
var session = require('express-session');
// define your session
// app.use(session({
//   logged: false,
//   count: 0
// }))
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }

}))

console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback

var count =0;
var result={};
app.get('/', function(request, response) {
    response.render("index");
})

app.post('/result', function (request, response){
    console.log('request.body ',request.body);
    result=request.body;
    console.log('Object.keys(result) ', Object.keys(result));
    response.redirect('/display_result');
})

app.get('/display_result', function (request, response){
    count +=1;
    console.log('count ', count);
    response.render('result', {result: result, count: count});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

