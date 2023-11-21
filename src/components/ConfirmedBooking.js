import React from "react";

const ConfirmedBooking = ({ bookingDetails }) => {
    return (
        <div className="confirm">
            <div className="confirm-can">
                <h1>Your Booking has Been <span>Confirmed!</span></h1>
                <p>Date: </p>
                <p>Time: </p>
                <p>Guests: </p>
                <p>Occasion: </p>
                <p>Name: </p>
            </div>
        </div>
    );
};

export default ConfirmedBooking;
