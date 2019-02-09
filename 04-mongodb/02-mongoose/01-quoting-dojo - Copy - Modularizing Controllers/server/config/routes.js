var mongoose = require('mongoose');
var User = mongoose.model('User')

const quoteController = require('../controllers/quotes');

module.exports = function(app){
  //put all routes inside this function

  // root route to render the index.ejs view
  app.get('/', function(req, res) {
    res.render("index");
  })
  // post route for adding a user
  
  
  
  app.post('/users', quoteController.users);
  
  // we want to get all of the users from the database and then render the index view passing it all of the users
  app.get('/quotes', quoteController.quotes);

}