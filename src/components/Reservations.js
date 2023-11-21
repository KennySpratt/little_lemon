import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reservations({ availableTimes, dispatch }) {
    const [reservation, setReservation] = useState({
        date: new Date(),
        time: '',
        diners: '',
        occasion: '',
        seating: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // Function to handle date change and dispatch update for times
    const handleDateChange = (date) => {
        setReservation({ ...reservation, date });
        dispatch({ type: 'UPDATE_TIMES', payload: date });
        validateForm();
    };

    // Function to handle other input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservation({ ...reservation, [name]: value });
        validateForm();
    };

    // Function to validate the form
    const validateForm = () => {
        const isValid = reservation.date && reservation.time && reservation.diners && reservation.occasion && reservation.seating;
        setIsFormValid(isValid);
    };

    // Function to handle navigation (adjust as needed)
    const handleNavigation = () => {
        if (isFormValid) {
            // Replace with your navigation logic
            window.location.href = 'customer-details-url';
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleNavigation();
    };

    return (
        <div className='booking-container'>
            <form onSubmit={handleSubmit} className='reservation-form'>
                <div>
                    <label htmlFor="reservation-date">Date:</label>
                    <DatePicker
                        inline
                        selected={reservation.date}
                        onChange={handleDateChange}
                    />

                    <label htmlFor="time">Time:</label>
                    <select name="time" id="time" value={reservation.time} onChange={handleChange}>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>


                    <label htmlFor="diners">Number of Diners:</label>
                    <select 
                        name="diners" 
                        id="diners" 
                        value={reservation.diners} 
                        onChange={handleChange}
                        className={!reservation.diners ? 'input-invalid' : ''}
                    >
                        <option value="">Select diners</option>
                        {Array.from({ length: 6 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>

                    {/* Occasion Dropdown */}
                    <label htmlFor="occasion">Occasion:</label>
                    <select 
                        name="occasion" 
                        id="occasion" 
                        value={reservation.occasion} 
                        onChange={handleChange}
                        className={!reservation.occasion ? 'input-invalid' : ''}
                    >
                        <option value="">Select Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Date Night">Date Night</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Engagement">Engagement</option>
                        <option value="NA">N/A</option>
                    </select>
                </div>
                <div>
                    <input type="radio" id="standard" name="seating" value="standard" onChange={handleChange} />
                    <label htmlFor="standard">Standard</label>

                    <input type="radio" id="outside" name="seating" value="outside" onChange={handleChange} />
                    <label htmlFor="outside">Outside</label>
                </div>
                <div>
                    <button type="submit" disabled={!isFormValid}>Next: Customer Details</button>
                </div>
            </form>
        </div>
    );
}

export default Reservations;
