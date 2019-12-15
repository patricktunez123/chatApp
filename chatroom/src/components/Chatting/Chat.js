import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';

let theSocket;

const Chat = ({ location }) => {
  const [username, setUserName] = useState('');
  const [chatRoom, setchatRoom] = useState('');
  const url = 'localhost:5500';

  useEffect(() => {
    const { username, chatRoom } = queryString.parse(location.search);

    theSocket = io(url);

    setUserName(username);
    setchatRoom(chatRoom);

    theSocket.emit('join', { username, chatRoom }, () => {
      
    });
  }, [url, location.search]);

  return (
    <h1>This is the chat component</h1>
  )
}

export default Chat;