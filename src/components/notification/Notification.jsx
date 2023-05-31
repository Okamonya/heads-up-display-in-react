import React, { useState } from 'react';
import './Notification.css';
import { BiMessageRounded } from 'react-icons/bi'

const Notification = ({ closePopup }) => {
  const [replyMessage, setReplyMessage] = useState('');

  const handleReplyClick = () => {
    setReplyMessage('Lorem ipsum dolor sit amet.');
  };

  const handleClearClick = () => {
    closePopup(false);
  };
  return (
    <div className="hud-container">
      <div className="hud-left">
        <div >
          <BiMessageRounded className="hud-icon" />
        </div>
        <div className="hud-info">
          <h1 className="hud-info-title">John Doe</h1>
          <p className="hud-info-message">
            {replyMessage ? replyMessage : 'new message'}
          </p>
        </div>
      </div>
      <div className="hud-right">
        <div className="hud-controls">
          <button className="hud-button" onClick={handleReplyClick}>Read</button>
          <button className="hud-button" onClick={handleClearClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;