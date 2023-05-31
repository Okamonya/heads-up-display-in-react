import React from 'react';
import './Message.css'

function Text({ sender, content, timestamp, read, onMessageClick }) {
  const handleClick = () => {
    // Call the onEmailClick function passed as a prop
    if (onMessageClick) {
      onMessageClick();
    }
  };

  return (
    <div className={`message ${read ? 'read' : 'unread'}`} onClick={handleClick}>
      <div className="message-sender">{sender}</div>
      <div className="message-timestamp">{timestamp}</div>
      <div className="message-content">{content}</div>
    </div>
  );
}

export default Text;