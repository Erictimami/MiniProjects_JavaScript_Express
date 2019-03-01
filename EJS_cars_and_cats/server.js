var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require('body-parser'); //to put the date into the body

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');//means that the server has to find all the .ejs inside the view folder. 
// very important. we change all the html files to the ejs file.
app.get('/', function(req, res){
    res.render("index");//we don't need to put .ejs because the server is expecting the file .ejs
});
app.get('/cars', function(req, res){
    res.render("cars");
});
app.get('/cars/new', function(req, res){
    res.render("new_car");
});
app.get('/cats', function(req, res){
    res.render("cats");
});
app.post('/process_car', function(req, res){
    res.redirect('/');
});

app.get('/cars/new', function(request, response){
    response.send("new_car");
});

app.listen(8000, function(){
    console.log('Listening on port 8000');
});
