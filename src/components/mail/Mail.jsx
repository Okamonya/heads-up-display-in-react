import React, { useState } from 'react';
import Email from './Email';

const Mail = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const emailData = [
        {
            id: 1,
            sender: 'john@example.com',
            subject: 'Hello',
            message: 'This is the email message.',
            timestamp: '2023-05-29 10:00 AM',
            read: true
        },
        {
            id: 2,
            sender: 'jane@example.com',
            subject: 'Meeting Reminder',
            message: 'Just a reminder about the meeting tomorrow.',
            timestamp: '2023-05-29 02:30 PM',
            read: false
        },
    ];

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    const handleEmailClose = () => {
        setSelectedEmail(null);
    };

    return (
        <section className='email__container'>
            <h1>Mail</h1>
            <div className='email_card'>
                {emailData.map((email) => (
                    <Email
                        key={email.id}
                        sender={email.sender}
                        subject={email.subject}
                        message={email.message}
                        timestamp={email.timestamp}
                        read={email.read}
                        onClick={() => handleEmailClick(email)}
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
    );
}

export default Mail;