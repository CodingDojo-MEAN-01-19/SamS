var mongoose = require('mongoose');
var User = mongoose.model('User')

const mongooseController = require('../controllers/mongooses');

module.exports = function(app){
  //put all routes inside this function
// GET '/' Displays all of the mongooses.
app.get('/mongoose/', mongooseController.index);
// function(req, res) {
  // User.find({}, function(err, users) {
  //   if (err) { console.log(err); }
  //   res.render('index', { users: users });
  // })
// })



// GET '/mongooses/new' Displays a form for making a new mongoose.
app.get('/mongoose/new', mongooseController.new);
// function(req, res) {
  // User.find({}, function(err, users) {
  //   if (err) { console.log(err); }
  //   res.render('new.ejs', { users: users });
  // })
// })



// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
app.post('/mongoose/mongooses', mongooseController.mongooses);
// function(req, res) {
  // console.log("POST DATA", req.body);
  // // create a new User with the name and age corresponding to those from req.body
  // var user = new User({name: req.body.name, age: req.body.age});
  // // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  // user.save(function(err) {
  //   // if there is an error console.log that something went wrong!
  //   if(err) {
  //     console.log('something went wrong');
  //   } else { // else console.log that we did well and then redirect to the root route
  //     console.log('successfully added a user!');
  //   }
  //   res.redirect('/mongoose/');
  // })
// })



// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
app.get('/mongoose/:id/edit/', mongooseController.idEdit);
// function(req, res){
  // User.find({ _id: req.params.id }, function(err, response) {
  //   if (err) { console.log(err); }
  //   res.render('edit', { user: response[0] });
  // })
// });

//THIS IS GET /id!
// GET '/mongooses/:id' Displays information about one mongoose.
app.get('/mongoose/:id', mongooseController.getId);
// function(req, res){
  // User.find({ _id: req.params.id }, function(err, response) {
  //   if (err) { console.log(err); }
  //   res.render('user', { user: response[0] });
  // })
// });


//THIS IS POST /id!
// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
app.post('/mongoose/:id', mongooseController.postId);
// function(req, res){
  // console.log(req.body);
  // User.update({ _id: req.params.id }, req.body, function(err, result){
  //   if (err) { console.log(err); 
  //   console.log(req.body)
  //   }
  //   res.redirect('/mongoose/');
  // });
// });


// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
app.post('/mongoose/destroy/:id', mongooseController.destroyId);
// function(req, res){
  // User.remove({ _id: req.params.id }, function(err, result){
  //   if (err) { console.log(err); }
  //   res.redirect('/mongoose/');
  // });
// });


}