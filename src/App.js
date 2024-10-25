// frontend/src/App.js
import React from 'react';
import CreateReservation from './components/CreateReservation';
import ReservationList from './components/ReservationList';

const App = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Restaurant Reservation System</h1>
            <CreateReservation />
            <ReservationList />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        color: '#333',
    },
};

export default App;
