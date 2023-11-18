import React from 'react';
import Reservations from './Reservations';

function Main({ showReservations }) {
    return (
        <div>
            {showReservations ? <Reservations /> : <p>Default main content</p>}
        </div>
    );
}

export default Main;

