const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { addingUser, removingUser, gettingUser, gettingUsersFromRoom } = require('./users');
const router = require('./router');

const port = process.env.PORT || 5500;

const app = express();
const srv = http.createServer(app);
const io = socketio(srv);

io.on('connection', (socket) => {
  console.log('new join');

  socket.on('join', ({ username, chatRoom }) => {
    console.log(username, chatRoom);
  })

  socket.on('disconnect', () => {
    console.log('left the conversation');
  })
})

app.use(router);
srv.listen(port, () => console.log(`Server in listening on port: ${port}`));