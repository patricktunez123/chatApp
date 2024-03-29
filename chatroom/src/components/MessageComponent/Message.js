import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, username }) => {
  let checkSentByCurrentUser = false;

  const theTrimedUsername = username.trim().toLowerCase();
  if(user === theTrimedUsername) {
    checkSentByCurrentUser = true;
  }

  return (
    checkSentByCurrentUser
    ? (
      <div className="messageContainer justifyEnd">
        <p className="sentTxt p-right-10">@{theTrimedUsername}</p>
        <div className="messageBox backgroundGreen">
          <p className="messageTxt colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
    : (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageTxt colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentTxt p-left-10">@{user}</p>
      </div>
    )
  )
}

export default Message;