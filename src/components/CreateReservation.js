// frontend/src/components/CreateReservation.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateReservation = () => {
    const [customerName, setCustomerName] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [partySize, setPartySize] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/reservations', {
                customerName,
                reservationDate,
                partySize,
            });
            console.log('Reservation created:', response.data);
            // Clear the form or show success message
            setCustomerName('');
            setReservationDate('');
            setPartySize('');
        } catch (error) {
            console.error('Error creating reservation:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Party Size"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                required
            />
            <button type="submit">Make Reservation</button>
        </form>
    );
};

export default CreateReservation;
