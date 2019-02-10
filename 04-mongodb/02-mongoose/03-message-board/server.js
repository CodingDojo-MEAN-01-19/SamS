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
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 1
	},
	message: {
		type: String,
		required: true,
		minlength: 1
  },
	comment: [{type: Schema.Types.ObjectId, 
		ref: 'Comment'}]

})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// UserSchema.path('name').required(true, 'Name cannot be blank');
// UserSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", UserSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
	name: String,
  text: String,
	message: [{type: Schema.Types.ObjectId, 
		ref: 'message'}]

})
// CommentSchema.path('name').required(true, 'Name cannot be blank');
// CommentSchema.path('text').required(true, 'Comment cannot be blank');

mongoose.model("Comment", CommentSchema);// We are setting this Schema in our Models as 'Comment'
const Comment = mongoose.model("Comment");// We are retrieving this Schema from our Models, named 'Comment'


mongoose.Promise = global.Promise;


var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({
	extended: true
}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');





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
	// create a new User with the name and age corresponding to those from req.body
	var user = new User({
		name: req.body.name,
		message: req.body.message
	});
	// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	user.save(function (err) {
		// if there is an error console.log that something went wrong!
		if (err) {
			console.log('something went wrong');
		} else { // else console.log that we did well and then redirect to the root route
			console.log('successfully added a user comment!');
		}
		res.redirect('/');
	})
})



app.post('/comment/:id', function (req, res){
  console.log(req.body);
  console.log(req.params.id)

const comment = new Comment ({
	name: req.params.id,
	text: req.body.comment,
	message: req.body
})
  .then(message => {
    console.log(message);

    // return User.findById(message.user)
    //   .then(user => {
    //     console.log(user);

    //     user.message.push(message._id);

    //     return user.save();
      // })
      // .then(() => {
      //   res.redirect('/');
      // });
  })
  .catch(console.log);



})



app.listen(8000, function () {
	console.log("listening on port 8000");
});
