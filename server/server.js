const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const {generateMessage} = require('./utils/message');

let app = express();
let server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket,)=>{
  console.log('New user connected');

    // admin text Welcome to the chat app
    socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));
    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

//PULL
  socket.on(('connect'),function(){
    console.log('User connected');
  });


  socket.on('createMessage', function(message){
    console.log('create message : ' , message);

      io.emit('newMessage',generateMessage(message.from,message.text));
      // callback('This is from the server');
  });

  socket.on(('disconnect'),function(){
    console.log('User disconnected');
  });

});


server.listen(port, () => {
  console.log('server is up on port ' + port);

});
