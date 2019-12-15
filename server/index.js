const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const port = process.env.PORT || 5500;

const app = express();
const srv = http.createServer(app);
const io = socketio(srv);

srv.listen(port, () => console.log(`Server in listening on port: ${port}`));