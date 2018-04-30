const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket,)=>{
  console.log('New user connected');

  socket.emit('newMessage',{
    from:'Recep',
    text:'see you then',
    createdAt : 1543
  });


// PUSH
  // socket.emit('newEmail',{
  //   from:'alparslanrecep@gmail.com',
  //   text:'Sa naber',
  //   createdAt : 1543
  // });


  // socket.emit('newNotification',{
  //   title:'first notification',
  //   text:'a new file added to lesson5',
  //   createdAt : 1543
  // });

//PULL
  socket.on(('connect'),function(){
    console.log('User connected');
  });


  socket.on('createMessage', function(message){
    console.log('create message : ' , message);
    //tüm baglantılara istek atar
    // io.emit('newMessage',{
    //   from:message.from,
    //   text:message.text,
    //   createAt: new Date().getTime()
    // });

    socket.broadcast.emit('newMessage',{
      from:message.from,
      text:message.text,
      createdAt:new Date().getTime()
    });



  })

  socket.on(('disconnect'),function(){
    console.log('User disconnected');
  });

});

server.listen(port, () => {
  console.log('server is up on port ' + port);

});
