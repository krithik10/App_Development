import React, { useState } from 'react';
import "./PaymentPage.css";

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    date: '',
    cvc: '',
    name: '',
    amount: '',
    hall: 'Hall 1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', paymentDetails);
    // Add payment processing logic here
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'cardNumber', 'date', 'cvc', 'amount'].map((field, idx) => (
          <div className="form-group" key={idx}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              id={field}
              name={field}
              value={paymentDetails[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="hall">Select Hall</label>
          <select id="hall" name="hall" value={paymentDetails.hall} onChange={handleChange}>
            {['Grand Hall', 'Main Auditorium', 'Banquet Hall'].map((hall, idx) => (
              <option value={hall} key={idx}>{hall}</option>
            ))}
          </select>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
