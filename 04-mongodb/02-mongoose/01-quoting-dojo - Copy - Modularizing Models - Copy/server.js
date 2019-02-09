// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();


// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/basic_mongoose');
// var UserSchema = new mongoose.Schema({
//   name: String,
//   quote: String
//  })
//  mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
//  var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
//  mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});