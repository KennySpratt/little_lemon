import React from 'react';
import Reservations from './Reservations';
import bruschetta from './assets/bruschetta.jpg';

function Main({ showReservations }) {
    return (
        <div>
            {showReservations ? (
                <Reservations />
            ) : (
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned
                            Mediterranean restaurant,
                            focused on traditional recipes
                            served with a modern twist.
                        </p>
                        <button>Reserve a table</button>
                    </div>
                    <div className="hero-image">
                        <img src={bruschetta} alt="Hero-Main" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;


