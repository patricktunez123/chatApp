const express = require('express');
const dotEnv = require('dotenv');
const socketio = require('socket.io');
const http = require('http');
const { addingUser, removingUser, gettingUser, gettingUsersFromRoom } = require('./users');
const router =require ('./router');

dotEnv.config();

const port = process.env.PORT || 5500;

const app = express();
const srv = http.createServer(app);
const io = socketio(srv);

io.on('connection', (socket) => {
  socket.on('join', ({ username, chatRoom }, callbackfn) => {
    const { error, user } = addingUser({ id: socket.id, username, chatRoom });

    if(error) return callbackfn(error);

    socket.emit('message', { user: 'Admin', text: `${user.username}, Welcome to ${user.chatRoom}` });
    socket.broadcast.to(user.chatRoom).emit('message', { user: 'Admin', text: `${user.username} has joined the conversation` });

    socket.join(user.chatRoom);

    io.to(user.chatRoom).emit('chatRoomData', { chatRoom: user.chatRoom, users: gettingUsersFromRoom(user.chatRoom)})

    callbackfn();
  });

  socket.on('sendMessage', (message, callbackfn) => {
    const user = gettingUser(socket.id);

    io.to(user.chatRoom).emit('message', { user: user.username, text: message });
    io.to(user.chatRoom).emit('chatRoomData', { chatRoom: user.chatRoom, users: gettingUsersFromRoom(user.chatRoom) });
    callbackfn();
  })

  socket.on('disconnect', () => {
    const user = removingUser(socket.id);

    if(user) {
      io.to(user.chatRoom).emit('message', { user: 'Admin', text: `${user.username} has left the conversation` })
    }
  })
})

app.use(router);
srv.listen(port, () => console.log(`Server in listening on port: ${port}`));