import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';

import './Chat.css';
import InformationBar from '../InformationBar/InformationBar';
import Input from '../InputComponent/Input';
import Messages from '../MessagesComponent/Messages';
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
    })
  }, [messages]);

  const sendMsg = (event) => {
    event.preventDefault();

    if(message) {
      theSocket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return (
    <div className="chatOuterContainer">
      <div className="chatInnerContainer">
        <InformationBar chatRoom={chatRoom}/>
        <Messages messages={messages}/>
        <Input message={message} setMessage={setMessage} sendMsg={sendMsg} />
      </div>
    </div>
  )
}

export default Chat;