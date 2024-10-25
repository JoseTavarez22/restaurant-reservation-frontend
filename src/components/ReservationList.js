// frontend/src/components/ReservationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reservations');
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/reservations/${id}`);
            setReservations(reservations.filter(reservation => reservation._id !== id));
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };

    return (
        <div>
            <h2>Reservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation._id}>
                        {reservation.customerName} - {new Date(reservation.reservationDate).toLocaleString()} - Party Size: {reservation.partySize}
                        <button onClick={() => handleDelete(reservation._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
