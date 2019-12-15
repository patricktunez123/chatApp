import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';

let theSocket;

const Chat = ({ location }) => {
  const [username, setUserName] = useState('');
  const [chatRoom, setchatRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const url = 'localhost:5500';

  useEffect(() => {
    const { username, chatRoom } = queryString.parse(location.search);

    theSocket = io(url);

    setUserName(username);
    setchatRoom(chatRoom);

    theSocket.emit('join', { username, chatRoom }, () => {
      
    });

    return () => {
      theSocket.emit('disconnect');
      theSocket.off();
    }
  }, [url, location.search]);

  useEffect(() => {
    theSocket.on('message', (message) => {
      setMessages([...messages, message]);
    }, [messages])
  })
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMsg(event) : null}
          />
      </div>
    </div>
  )
}

export default Chat;