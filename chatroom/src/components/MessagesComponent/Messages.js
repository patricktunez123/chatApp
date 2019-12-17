import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../MessageComponent/Message';
import './Messages.css';

const Messages = ({ messages, username }) => (
  <ScrollToBottom className="msgs">
    {messages.map((message, i) => <div key={i}><Message message={message} username={username}/></div>)}
  </ScrollToBottom>
)

export default Messages;