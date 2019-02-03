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

  socket.on('submit', function(){
    let random_number = Math.floor((Math.random() * 1000) + 1);
    io.emit('numberUpdated', random_number); //emit to all clients
  });






  socket.on('posting_form', function(data){
    console.log(data);
    io.emit('textUpdated', data);
  });
});



// function numberUpdated(number) {
//   io.emit('numberUpdated', number);
// }