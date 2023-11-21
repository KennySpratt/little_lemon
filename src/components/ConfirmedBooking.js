import React from "react";

const ConfirmedBooking = ({ bookingDetails }) => {
    return (
        <div className="confirm">
            <div>
                <h1>Your Booking has Been <span>Confirmed!</span></h1>
                {/*<p>Date: {bookingDetails.date}</p>
                <p>Time: {bookingDetails.time}</p>
                <p>Guests: {bookingDetails.guests}</p>
                <p>Occasion: {bookingDetails.occasion}</p>
                <p>Name: {bookingDetails.name}</p> */}
            </div>
        </div>
    );
};

export default ConfirmedBooking;
