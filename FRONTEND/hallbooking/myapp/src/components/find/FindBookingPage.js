import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import './FindBookingPage.css'; // Import the CSS file

const FindBookingPage = () => {
    const [userId, setUserId] = useState('');
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFindBooking = async () => {
        if (!userId) {
            setError('Please enter a user ID.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Replace with your API endpoint
            const response = await axios.get(`https://api.example.com/bookings/${userId}`);
            setBooking(response.data);
        } catch (err) {
            setError('Booking not found or an error occurred.');
            setBooking(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="find-booking-page">
            <h1>Find Your Booking</h1>
            <p className="instructions">
                Enter your User ID below to find your booking details.
            </p>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="user-id-input"
                />
                <button onClick={handleFindBooking} className="find-button">
                    {loading ? 'Searching...' : 'Find Booking'}
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {booking && (
                <div className="booking-details">
                    <h2>Booking Details</h2>
                    <p><strong>User ID:</strong> {booking.userId}</p>
                    <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                    <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {booking.location}</p>
                    <p><strong>Status:</strong> {booking.status}</p>
                    <p><strong>Guest Name:</strong> {booking.guestName}</p>
                    <p><strong>Room Type:</strong> {booking.roomType}</p>
                    <p><strong>Special Requests:</strong> {booking.specialRequests || 'None'}</p>
                </div>
            )}
        </div>
    );
};

export default FindBookingPage;
