import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [username, setUserName] = useState('');
  const [chatRoom, setchatRoom] = useState('');
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="headingTitle">Join chatRoom</h1>
        <div><input placeholder="Username" className="joiningInput" type="text" onChange={(event) => setUserName(event.target.value)} /></div>
        <div><input placeholder="ChatRoom" className="joiningInput mt-20" type="text" onChange={(event) => setchatRoom(event.target.value)} /></div>
        <Link onClick={event => (!username || !chatRoom) ? event.preventDefault() : null} to={`/Chat?username=${username}&chatRoom=${chatRoom}`}>
          <button className="btn mt-20" type="submit">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;