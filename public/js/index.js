let socket = io();

socket.on('connect', () => {
  console.log('connected to server');

  // socket.emit('createEmail',{
  //   to:'ralparslan@altar-tr.com',
  //   text:'as iyilik'
  // });


  // socket.emit('createMessage',{
  //   from:'ralparslan@altar-tr.com',
  //   text:'That works for me'
  // });


});

socket.on('disconnect', () => {
  console.log('disconnected from server');
  });



  socket.on('newMessage', function(message){
    console.log('newMessage ', message);
  });

// socket.on('newEmail', function(email){
//   console.log('New email ');
//   console.log(email);
// });

// socket.on('newNotification', function(newNotification){
//   console.log('New newNotification ');
//   console.log(newNotification);
// });
