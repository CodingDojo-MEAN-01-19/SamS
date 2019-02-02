// require express
var express = require("express");
// path module -- try to figure out where and why we use this


//adding session
// new code:
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
  if(!session.hasOwnProperty('counter')) {
    session.counter = 1;
  } else {
    session.counter += 1;
}
  
    res.render('index', {counter: session.counter});
})

// function add(request) {
//   //?: is conditional if else. if is ?, else is : 
//   //https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
//   // return request.session.counter = request.session.counter ? request.session.counter + 1 : 1; 
//   //pseudo code explaining
//   // if request.session.counter exists , 
//   //   add 1,
//   // else return request.session.counter = 1


//   return request.session.counter += 1;


//   // if (request.session.counter >= 1) {
//   //   return request.session.counter += 1;
//   // } else {
//   //    request.session.counter = 1;
//   //    return request.session.counter
//   // }



// }

app.get("/clear", function (request, response){
    session.counter = 0;
    response.render('index', {counter: session.counter});
  })

  app.get("/addTwo", function (request, response){
    session.counter += 2;
    response.render('index', {counter: session.counter});
  })












// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});