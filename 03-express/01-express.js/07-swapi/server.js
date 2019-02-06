// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
//including request to use api
const request = require('request');



// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})

// app.get('/people', function(req, res) {
//   console.log("POST DATA", req.body);
//   // Using request 
//   request('https://swapi.co/api/people', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     // console.log(body.url);
//     // console.log(body); //works for https://swapi.co/api/people
//     // console.log(body.name); //works for 'https://swapi.co/api/people/1'
//     // console.log(body.results) //gets all the results in api

//     for (let data in body.results) {
//       console.log(body.results[data].name); //will get 10 at a time, but I can't figure out how to get more with recursion

//     }
//   });

app.get('/people', function(req, res) {
  console.log("POST DATA", req.body);
  // Using request 
  request('https://swapi.co/api/people', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    // console.log(body.url);
    // console.log(body); //works for https://swapi.co/api/people
    // console.log(body.name); //works for 'https://swapi.co/api/people/1'
    // console.log(body.results) //gets all the results in api

    for (let data in body.results) {
      console.log(body.results[data].name); //will get 10 at a time, but I can't figure out how to get more with recursion

    }
  });











  // Then redirect to the root route
  res.redirect('/');
 })




// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})