// Configuration______________________________________________________
var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
// ____________________________________________________________________|

//Express Setting______________________________________________________
//app.use(express.static(path.join(__dirname, './static'))); //this was already commented out

// app.use(express.static(__dirname + '/static')); //this will need to be deleted
app.use(express.static(__dirname + '/public/dist/public')); //this is what I should use, but not sure if it's set up
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
// ____________________________________________________________________|

app.use(function(req, res, next) {
  console.log(req.url, req.method);
  next();
});

//Mongoose Setting_____________________________________________________
mongoose.connect('mongodb://localhost/rateMyCakes');
require('./server/models/cake');
mongoose.Promise = global.Promise;
// ____________________________________________________________________|

//Routing______________________________________________________________
require('./server/config/routes.js')(app);
// this route will be triggered if any of the express routes do not match
// app.all('*', (req, res, next) => {
//   res.sendFile(path.resolve('./public/dist/public/index.html'));
// });
// ____________________________________________________________________|

//App listening________________________________________________________
app.listen(8001, function() {
  console.log('listening on port 8001');
});
// ___________________________________________________________________|
