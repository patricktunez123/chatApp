import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineImg from '../../icons/onlineImg.png';
import './InformationBar.css';

const InformationBar = ({ chatRoom }) => (
  <div className="informationBar">
    <div className="leftInnerContainer">
      <img className="onlineImg" src={onlineImg} alt="Online" />
      <h3>{chatRoom}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="Close" /></a>
    </div>
  </div>
)

export default InformationBar;