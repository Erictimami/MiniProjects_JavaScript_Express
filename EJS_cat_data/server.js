cats = [
    {
        id: 1,
      Name: "Mino",
      Age: 1,
      sleeping_spots: ["under the table", "outside"]
    },
    {
        id: 2,
      Name: "Popie",
      Age: 2,
      sleeping_spots: ["on the bed", "in a sunbeam", "sometimes never sleep", "anywhere where is the food"]
    },
    {
        id: 3,
      Name: "Spido",
      Age: 3,
      sleeping_spots: ["under the car", "at the top of the wall"]
    },
    {
        id: 4,
      Name: "Talo",
      Age: 4,
      sleeping_spots: ["in the kichen", "on the carpet"]
    },
    {
        id: 5,
      Name: "Faro",
      Age: 5,
      sleeping_spots: ["under the bed", "on the living room", "everywhere"]
    }
];


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

app.get('/cats', function(req, res){
    res.render("cats", {cats: cats});
});

app.get('/Mino', function(req, res){

    res.render("details", {cat: cats[0]});
});
app.get('/Popie', function(req, res){

    res.render("details", {cat: cats[1]});
});
app.get('/Spido', function(req, res){

    res.render("details", {cat: cats[2]});
});
app.get('/Talo', function(req, res){

    res.render("details", {cat: cats[3]});
});
app.get('/Faro', function(req, res){

    res.render("details", {cat: cats[4]});
});

app.listen(8000, function(){
    console.log('Listening on port 8000');
});
