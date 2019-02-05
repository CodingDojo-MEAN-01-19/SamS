var express = require("express");
var path = require("path");
var session = require("express-session")
var bodyParser = require('body-parser');
var app = express();
app.use(session({ secret: 'myname' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let messages = []; //messages array
app.get('/', function (req, res) { //get the index route
    res.render("index", {key: messages}); //render index and key: messages
})

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server); //connection
io.sockets.on('connection', function (socket) {
    socket.on("createmessage", function (data){
      // console.log(data);
      let pageDataName = data.name;
      let pageDataMessage = data.message;

      //push object on
      messages.push({
        name: pageDataName,
        message: pageDataMessage
      });
      io.emit('serverMessages', {
        name: data.name,
        message: data.message,
        allmessages: messages
      });

    });


    });




