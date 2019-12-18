import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [username, setUserName] = useState('');
  const [chatRoom, setchatRoom] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h5 className="headingTitle">Connect with your friends</h5>
        <div><input placeholder="Username" className="joiningInput" type="text" onChange={(event) => setUserName(event.target.value)} /></div>
        <div><input placeholder="ChatRoom" className="joiningInput mt-20" type="text" onChange={(event) => setchatRoom(event.target.value)} /></div>
        <div><input placeholder="Password" className="joiningInput mt-20" type="text" onChange={(event) => setPassword(event.target.value)} /></div>
        <Link onClick={event => (!username || !chatRoom || !password) ? event.preventDefault() : null} to={`/Chat?username=${username}&chatRoom=${chatRoom}&password=${password}`}>
          <button className="btn mt-20" type="submit">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;