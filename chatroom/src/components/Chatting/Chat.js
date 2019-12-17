import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';

import './Chat.css';
import InformationBar from '../InformationBar/InformationBar';
import Input from '../InputComponent/Input';
import UsersContainer from '../UsersContainer/UsersContainer';
import Messages from '../MessagesComponent/Messages';
let theSocket;

const Chat = ({ location }) => {
  const [username, setUserName] = useState('');
  const [chatRoom, setchatRoom] = useState('');
  const [users, setUsers] = useState('');
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

    theSocket.on('chatRoomData', ({ users }) => {
      setUsers(users);
    })

    return () => {
      theSocket.emit('disconnect');

      theSocket.off();
    }
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
        <Messages messages={messages} username={username} />
        <Input message={message} setMessage={setMessage} sendMsg={sendMsg} />
      </div>
      <UsersContainer users={users}/>
    </div>
  )
}

export default Chat;