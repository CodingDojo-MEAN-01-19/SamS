const User = require('mongoose').model('User');
module.exports = {

  
  quotes(req, res) {
    User.find({}, function(err, users) {
      if (err) { console.log(err); }
      res.render('quotes', { users: users });
    })
  },
  users(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, quote: req.body.quote});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added data!');
      }
      res.redirect('/quotes');
    })
  }

}


