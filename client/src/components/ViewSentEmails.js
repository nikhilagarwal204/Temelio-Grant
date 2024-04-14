import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewSentEmails() {
    const [emails, setEmails] = useState([]);
    const [foundationEmail, setFoundationEmail] = useState('');

    const fetchEmails = async () => {
        setEmails([]);
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/sent-emails/?email=${foundationEmail}`);
            setEmails(response.data);
        } catch (error) {
            alert('Failed to fetch emails');
        }
    };

    useEffect(() => {
        if (foundationEmail) fetchEmails();
        // eslint-disable-next-line 
    }, []);

    return (
        <div>
            <input type="email" value={foundationEmail} onChange={(e) => setFoundationEmail(e.target.value)} placeholder="Foundation Email" />
            <button onClick={fetchEmails}>View Sent Emails</button>
            {emails.map((email, index) => (
                <div key={index}>
                    <p style={{ margin: "1% 2%" }}>{email.nonprofit_email}: {email.message_content}</p>
                </div>
            ))}
        </div>
    );
}

export default ViewSentEmails;