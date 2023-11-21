import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (newDate) => {
        setDate(newDate);
        // Dispatch an action to update times based on the selected date
        props.dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gather form data
        const formData = { date, time, guests, occasion };
        props.submitForm(formData);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* Date selection */}
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleDateChange(e.target.value)} type="date" required />
                        </div>
                        {/* Time selection */}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {props.availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>
                        {/* Number of Guests */}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>
                        {/* Occasion field */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="">Select Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Date Night">Date Night</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                                <option value="NA">N/A</option>
                            </select>
                        </div>
                        {/* Submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
