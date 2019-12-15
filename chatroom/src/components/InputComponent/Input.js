import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMsg }) => (
 <form className="form">
   <input
   className="input"
   type="text"
   placeholder="Type Message"
   value={message}
    onChange={(event) => setMessage(event.target.value)}
    onKeyPress={event => event.key === 'Enter' ? sendMsg(event) : null}
   />
   <button className="sendBtn" onClick={(event) => sendMsg(event)}>Send</button>
 </form>
)

export default Input;