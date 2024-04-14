import React, { useState } from 'react';
import axios from 'axios';

function CreateFoundation() {
    const [foundation, setFoundation] = useState({
        email: ''
    });

    const handleChange = (e) => {
        setFoundation({ ...foundation, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/foundation/`, foundation);
            alert('Foundation created successfully');
        } catch (error) {
            alert('Failed to create foundation');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Create Foundation</button>
        </form>
    );
}

export default CreateFoundation;