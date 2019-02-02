//From Platform
// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + "/public"));
// const server = app.listen(1337);
// const io = require('socket.io')(server);
// var counter = 0;
    
// io.on('connection', function (socket) { //2
  
//   socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
//   socket.on('thankyou', function (data) { //7
//     console.log(data.msg); //8 (note: this log will be on your server's terminal)
//   });
    
// });

//From Lecture Video http://learn.codingdojo.com/m/14/4712/34060
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(port, () => console.log(`listening on port ${port}`)); //when using sockets we need return value for the server
const io = require('socket.io')(server); //reason we save is when then pass to socket.io 

//on is method to listen for event
let count = 0;
io.on('connection', socket => { //pass socket for callback

  console.log('incoming socket connection');

  //listen on server for event
  socket.on('buttonClicked', function(){
    count++
    io.emit('numberUpdated', count); //emit to all clients. sending over count
    //alternate way using the numberUpdated function
    // numberUpdated(++count); //++count is like count++, only ++count increments BEFORE count is sent, count++ increments AFTER
  });

  socket.on('reset', function(){
    count = 0;
    io.emit('numberUpdated', count); //emit to all clients. sending over count
    //alternate way using the numberUpdated function
    // numberUpdated(count = 0);
  });

  //give a new user the current count
  socket.emit('numberUpdated', count)
});


function numberUpdated(number) {
  io.emit('numberUpdated', number);
}