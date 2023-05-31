import React, { useState } from 'react'
import Text from './Text';

function Message() {

  const [selectedEmail, setSelectedEmail] = useState(null);
  const emailData = [
    {
      id: 1,
      sender: 'John',
      timestamp: '2023-05-29T09:30:00Z',
      content: 'Hello there!',
    },
    {
      id: 2,
      sender: 'Jane',
      timestamp: '2023-05-29T09:32:15Z',
      content: 'Hi John! How are you?',
    },
    {
      id: 3,
      sender: 'John',
      timestamp: '2023-05-29T09:33:42Z',
      content: 'I\'m doing great. Thanks for asking!',
    },
  ];

  const handleMessageClick = (email) => {
    setSelectedEmail(email);
  };

  const handleEmailClose = () => {
    setSelectedEmail(null);
  };
  return (
    <section className='message__container'>
      <h1>Messages</h1>
      <div className='email_card'>
        {emailData.map((message) => (
          <Text
            key={message.id}
            sender={message.sender}
            content={message.content}
            timestamp={message.timestamp}
            read={message.read}
            onClick={() => handleMessageClick(message)}
          />
        ))}
        {selectedEmail && (
          <div className="detailed-view">
            <h2>{selectedEmail.subject}</h2>
            <p>From: {selectedEmail.sender}</p>
            <p>{selectedEmail.message}</p>
            <button onClick={handleEmailClose}>Close</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Message