// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function Reservations() {
//     const [reservation, setReservation] = useState({
//         date: new Date(),
//         time: '',
//         diners: '',
//         occasion: '',
//         seating: '',
//     });

//     const [disabledTimes, setDisabledTimes] = useState([]);

//     useEffect(() => {
//         const times = Array.from({ length: 20 }, (_, i) => {
//             const hour = Math.floor(i / 2) + 11;
//             const minute = i % 2 === 0 ? '00' : '30';
//             return hour < 15 || hour >= 17 ? `${hour}:${minute}` : null;
//         }).filter(Boolean);

//         const halfLength = Math.ceil(times.length / 2);
//         const shuffled = times.sort(() => 0.5 - Math.random());
//         setDisabledTimes(shuffled.slice(0, halfLength));
//     }, []);

//     const [isFormValid, setIsFormValid] = useState(false);

//     // Function to handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setReservation({ ...reservation, [name]: value });
//         validateForm();
//     };

//     // Function to validate the form
//     const validateForm = () => {
//         const isValid = reservation.date && reservation.time && reservation.diners && reservation.occasion && reservation.seating;
//         setIsFormValid(isValid);
//     };

//     // Function to handle navigation
//     const handleNavigation = () => {
//         if (isFormValid) {
//             // Replace 'customer-details-url' with the actual path or logic for navigation
//             window.location.href = 'customer-details-url';
//         }
//     };

//     // Function to handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add logic to handle form submission
//         handleNavigation();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="reservation-date">Date:</label>
//                     <DatePicker
//                         inline
//                         selected={reservation.date}
//                         onChange={(date) => setReservation({...reservation, date})}
//                     />

//                     <label htmlFor="time">Time:</label>
//                     <select name="time" id="time" value={reservation.time} onChange={handleChange}>
//                         {Array.from({ length: 20 }, (_, i) => {
//                             const hour = Math.floor(i / 2) + 11;
//                             const minute = i % 2 === 0 ? '00' : '30';
//                             const timeValue = `${hour}:${minute}`;
//                             if (hour < 15 || hour >= 17) {
//                                 return (
//                                     <option key={i} value={timeValue} disabled={disabledTimes.includes(timeValue)}>
//                                         {timeValue}
//                                     </option>
//                                 );
//                             }
//                             return null;
//                         })}
//                     </select>


//                     <label htmlFor="diners">Number of Diners:</label>
//                     <select 
//                         name="diners" 
//                         id="diners" 
//                         value={reservation.diners} 
//                         onChange={handleChange}
//                         className={!reservation.diners ? 'input-invalid' : ''}
//                     >
//                         <option value="">Select diners</option>
//                         {Array.from({ length: 6 }, (_, i) => (
//                             <option key={i + 1} value={i + 1}>{i + 1}</option>
//                         ))}
//                     </select>

//                     {/* Occasion Dropdown */}
//                     <label htmlFor="occasion">Occasion:</label>
//                     <select 
//                         name="occasion" 
//                         id="occasion" 
//                         value={reservation.occasion} 
//                         onChange={handleChange}
//                         className={!reservation.occasion ? 'input-invalid' : ''}
//                     >
//                         <option value="">Select Occasion</option>
//                         <option value="Birthday">Birthday</option>
//                         <option value="Date Night">Date Night</option>
//                         <option value="Anniversary">Anniversary</option>
//                         <option value="Engagement">Engagement</option>
//                         <option value="NA">N/A</option>
//                     </select>
//                 </div>
//                 <div>
//                     <input type="radio" id="standard" name="seating" value="standard" onChange={handleChange} />
//                     <label htmlFor="standard">Standard</label>

//                     <input type="radio" id="outside" name="seating" value="outside" onChange={handleChange} />
//                     <label htmlFor="outside">Outside</label>
//                 </div>
//                 <div>
//                     <button type="submit" disabled={!isFormValid}>Next: Customer Details</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Reservations;
