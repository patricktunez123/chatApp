import React from 'react';
import onlineImg from '../../icons/onlineImg.png';

import './UsersContainer.css';

const UsersContainer = ({ users }) => (
  <div className="usersContainer">
    <div>
      <h2>chatApp</h2>
      <h5>chatApp helps u to connect with your friends wherever they are!, Try it out right now!</h5>
    </div>
    {
      users
        ? (
          <div>
            <h4>People online:</h4>
            <div className="activeContainer">
              <h4>
                {users.map(({username}) => (
                  <div key={username} className="activeItem">
                    @{username}
                    <img alt="Online" src={onlineImg}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default UsersContainer;