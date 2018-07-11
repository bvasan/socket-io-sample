  var socket = io();

  socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createEmail', {
      to: 'babu@example.com',
      text: 'I am good thank you'
    });

    socket.emit('createMessage', {
      from: 'lavan',
      text: 'hello all'
    });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });

  socket.on('newEmail', function (email) {
    console.log('New email',email);
  });

  socket.on('newMessage', function (message) {
    console.log('New message ',message);
  });
