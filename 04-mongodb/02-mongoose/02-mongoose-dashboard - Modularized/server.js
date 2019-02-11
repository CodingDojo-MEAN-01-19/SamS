var bodyParser = require('body-parser');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// all of this is supposed to move to the database.js folder but crashes when I move it. uncomment and app will work
mongoose.connect('mongodb://localhost/mongoose_db');
 mongoose.Promise = global.Promise;

// all of this is supposed to move to the models folder but crashes when I move it.  uncomment and app will work
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


//have to add this to make controllers file work!
require('./server/config/routes.js')(app);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');






// // GET '/' Displays all of the mongooses.
// app.get('/mongoose/', function(req, res) {
//   // User.find({}, function(err, users) {
//   //   if (err) { console.log(err); }
//   //   res.render('index', { users: users });
//   // })
// })



// // GET '/mongooses/new' Displays a form for making a new mongoose.
// app.get('/mongoose/new', function(req, res) {
//   // User.find({}, function(err, users) {
//   //   if (err) { console.log(err); }
//   //   res.render('new.ejs', { users: users });
//   // })
// })



// // POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
// app.post('/mongoose/mongooses', function(req, res) {
//   // console.log("POST DATA", req.body);
//   // // create a new User with the name and age corresponding to those from req.body
//   // var user = new User({name: req.body.name, age: req.body.age});
//   // // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//   // user.save(function(err) {
//   //   // if there is an error console.log that something went wrong!
//   //   if(err) {
//   //     console.log('something went wrong');
//   //   } else { // else console.log that we did well and then redirect to the root route
//   //     console.log('successfully added a user!');
//   //   }
//   //   res.redirect('/mongoose/');
//   // })
// })



// // GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
// app.get('/mongoose/:id/edit/', function(req, res){
//   // User.find({ _id: req.params.id }, function(err, response) {
//   //   if (err) { console.log(err); }
//   //   res.render('edit', { user: response[0] });
//   // })
// });

// //THIS IS GET /id!
// // GET '/mongooses/:id' Displays information about one mongoose.
// app.get('/mongoose/:id', function(req, res){
//   // User.find({ _id: req.params.id }, function(err, response) {
//   //   if (err) { console.log(err); }
//   //   res.render('user', { user: response[0] });
//   // })
// });


// //THIS IS POST /id!
// // POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
// app.post('/mongoose/:id', function(req, res){
//   // console.log(req.body);
//   // User.update({ _id: req.params.id }, req.body, function(err, result){
//   //   if (err) { console.log(err); 
//   //   console.log(req.body)
//   //   }
//   //   res.redirect('/mongoose/');
//   // });
// });


// // POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
// app.post('/mongoose/destroy/:id', function(req, res){
//   // User.remove({ _id: req.params.id }, function(err, result){
//   //   if (err) { console.log(err); }
//   //   res.redirect('/mongoose/');
//   // });
// });



// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
 });