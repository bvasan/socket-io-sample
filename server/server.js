const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const PORT = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'babu@example.com',
    text: 'hi how are you',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('CreateEmail',newEmail);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.on('createMessage', (newMessage) => {
    var broadcastMessage = {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date()
    }
    console.log('New message received', newMessage);

    socket.emit('newMessage', broadcastMessage);
  });
});

server.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
