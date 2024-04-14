import React, { useState } from 'react';
import axios from 'axios';

function CreateNonProfit() {
    const [nonprofit, setNonprofit] = useState({
        name: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        setNonprofit({ ...nonprofit, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/nonprofit/`, nonprofit);
            alert('Nonprofit created successfully');
        } catch (error) {
            alert('Failed to create nonprofit');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Create Nonprofit</button>
        </form>
    );
}

export default CreateNonProfit; 