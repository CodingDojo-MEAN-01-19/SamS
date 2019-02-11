const User = require('mongoose').model('User');
module.exports = {

  index(req, res) {
    User.find({}, function(err, users) {
      if (err) { console.log(err); }
      res.render('index', { users: users });
    })
  },

  new(req, res) {
    User.find({}, function(err, users) {
      if (err) { console.log(err); }
      res.render('new.ejs', { users: users });
    })
  },

  mongooses(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
      }
      res.redirect('/mongoose/');
    })
  },

  idEdit(req, res) {
    User.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { user: response[0] });
    })
  },

  getId(req, res) {
    User.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('user', { user: response[0] });
    })
  },

  postId(req, res) {  
    console.log(req.body);
    User.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); 
      console.log(req.body)
      }
      res.redirect('/mongoose/');
    });
  },

  destroyId(req, res) {
    User.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/mongoose/');
    });
  },
 
  


}