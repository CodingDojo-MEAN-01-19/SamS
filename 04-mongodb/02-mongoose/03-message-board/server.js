// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/messageBoardMongoose', function (err, db) {
	if (err) {
		console.log("error here");
		console.log(err);
	}
});

//Define Schema Variable
const Schema = mongoose.Schema;

//Define UserSchema (Post Schema)
const UserSchema = new mongoose.Schema({
	name: {type: String,required: true,minlength: 1},
	message: {type: String,required: true,minlength: 1},
	comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

//Define Comment Schema
const CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	message: {type: Schema.Types.ObjectId, 
		ref: 'message'}
})

// Set models by passing them respective Schemas
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
// mongoose.model("Message", UserSchema);
mongoose.model("Comment", CommentSchema);// We are setting this Schema in our Models as 'Comment'

//Store models in variables
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
const Comment = mongoose.model("Comment");// We are retrieving this Schema from our Models, named 'Comment'
//const Message = mongoose.model("Message");


// Model validations
// UserSchema.path('name').required(true, 'Name cannot be blank');
// UserSchema.path('message').required(true, 'Message cannot be blank');
// CommentSchema.path('name').required(true, 'Name cannot be blank');
// CommentSchema.path('text').required(true, 'Comment cannot be blank');



mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//Find all the users
// GET '/' Displays all of the mongooses.
app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
       console.log(err);
       }
    res.render('index', { users: users });
  })
})


// post route for adding a users message
app.post('/users', function (req, res) {
	console.log("POST DATA", req.body);
	// create a new User with the name and message corresponding to those from req.body
	var user = new User({
		name: req.body.name,
		message: req.body.message
	});
	user.save(function (err) {
		if (err) {
			console.log('something went wrong');
		} else { 
			console.log('successfully added a user comment!');
		}
		res.redirect('/');
	})
})



app.post('/comment/:id', function (req, res){
  // console.log("req.body is " + req.body);
	// console.log("req.params.id is " + req.params.id)
	// console.log("req.body.user is " + req.body.user) 
	console.log("req.body.name is " + req.body.name)//this is the user commenting!
	// console.log("req.params.postComment is " + req.params.postComment)
	// console.log("req.body.message is " + req.body.message)
	console.log("req.body.text is " + req.body.text) //this is the users comment!

	const messageId = req.params.id;
	// console.log(messageId);

	User.findOne({_id: messageId}, function(err, user){
		var newComment = new Comment({name: req.body.name, text: req.body.text});
		// console.log(newComment)
		console.log(user._id)
		newComment.message = user._id; //user._id is referencing the UserSchema model. Here we are setting the newComment.message (see Comment model)
		console.log(newComment.message)


		User.update({ _id: user._id }, { $push: { comments: newComment }}, function(err) {
		});
			newComment.save(function(err) {
				if (err) {
					console.log(err);

				} else {
					console.log("comment added");
				}
			

		});
	})
	res.redirect('/');
})



//find all users based on a requirement
app.get('/1', function(req, res) {
	User.find({name:'Jessica'}, function(err, users) {
		// Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.
		// This code will run when the DB is done attempting to retrieve all matching records to {name:'Jessica'}
	 })
})


//find one user
app.get('/2', function(req, res) {
 // ...retrieve 1 record (the first record found) matching {} 
User.findOne({}, function(err, user) {
	// Retrieve 1 object
	// This code will run when the DB is done attempting to retrieve 1 record.
 })
})

//delete all users
app.get('/3', function(req, res) {
 // ...delete all records of the User Model
User.remove({}, function(err){
	// This code will run when the DB has attempted to remove all matching records to {}
 })
})

//delete 1 record
app.get('/4', function(req, res) {
 // ...delete 1 record by a certain key/value.
User.remove({_id: 'insert record unique id here'}, function(err){
	// This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
 })
})


app.get('/5', function(req, res) {
// ...update any records that match the query
User.update({name:'Andriana'}, {$push: {pets: {name: 'Skippy', type: 'cactus' }}}, function(err){
	// This code will run when the DB has attempted to update the matching record.
 })
 // another way to update a record
//  User.findOne({name: 'Andriana'}, function(err, user){
// 	user.name = 'Andri';
// 	user.pets.push({name: 'Skippy', type: 'cactus'});
// 	user.save(function(err){
// 			// if save was successful awesome!
// 	})
//  })
 })















app.listen(8000, function () {
	console.log("listening on port 8000");
});
