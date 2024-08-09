import React from 'react';
import './BookingSuccessPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const BookingSuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h1>Booking Successful!</h1>
        <p>Your booking has been confirmed. Thank you for choosing our conference hall.</p>
        <a href="/" className="return-home">Return to Home</a>
      </div>
    </div>
  );
}

export default BookingSuccessPage;
