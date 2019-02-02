// require express
var express = require("express");
//session
var session = require('express-session');

var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
//session
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render('index', {counter: session.counter});
})


// post route for adding a user
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 const formData = {
   firstName: req.body.firstName,
   lastName: req.body.lastName,
   location: req.body.location,
   textArea: req.body.textArea
 };
//  console.log(formData.firstName)
  
 res.render('results.ejs', {form: formData});
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
//  console.log("listening on port 8000");
});