import React from 'react';
import './Email.css'

function Email({ sender, subject, message, timestamp, read, onEmailClick }) {
  const handleClick = () => {
    // Call the onEmailClick function passed as a prop
    if (onEmailClick) {
      onEmailClick();
    }
  };

  return (
    <div className={`email ${read ? 'read' : 'unread'}`} onClick={handleClick}>
      <div className="email-sender">{sender}</div>
      <div className="email-subject">{subject}</div>
      <div className="email-message">{message}</div>
      <div className="email-timestamp">{timestamp}</div>
    </div>
  );
}

export default Email;
