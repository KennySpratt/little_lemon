import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Reservations from './Reservations';
import Footer from './Footer';
import './App.css';

function App() {
  const [showReservations, setShowReservations] = useState(false);

  const handleReservationClick = () => {
    setShowReservations(true);
  };

  return (
    <div className="container">
      <Header />
      <Nav onReservationClick={handleReservationClick} />
      <Main showReservations={showReservations} />
      <Footer />
    </div>
  );
}

export default App;


