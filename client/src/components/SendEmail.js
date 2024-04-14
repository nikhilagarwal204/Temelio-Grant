import React, { useState } from 'react';
import axios from 'axios';

function SendEmail() {
    const [foundationEmail, setFoundationEmail] = useState('');
    const [nonprofitEmails, setNonprofitEmails] = useState('');

    const handleSendEmail = async () => {
        try {
            // Splitting by comma and trimming each email to ensure proper format
            const emailsArray = nonprofitEmails.split(',').map(email => email.trim());
            await axios.post(`${process.env.REACT_APP_API_URL}/send-email/`, {
                foundation_email: foundationEmail,
                nonprofit_emails: emailsArray
            });
            alert('Emails sent successfully');
        } catch (error) {
            alert('Failed to send emails');
        }
    };

    return (
        <div>
            <input
                type="email"
                value={foundationEmail}
                onChange={(e) => setFoundationEmail(e.target.value)}
                placeholder="Foundation Email"
            />
            <input
                className='nonprofit-emails'
                type="text"
                value={nonprofitEmails}
                onChange={(e) => setNonprofitEmails(e.target.value)}
                placeholder="Nonprofit Emails (comma separated)"
            />
            <button onClick={handleSendEmail}>Send Emails</button>
        </div>
    );
}

export default SendEmail;