import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  
  const name = queryParams.get('name');
  const capacity = queryParams.get('capacity');
  const location = queryParams.get('location');
  const contact = queryParams.get('contact');

  return (
    <div className="booking-container">
      <div className="conference-info">
        <h1>About the Conference Hall</h1>
        <p>Welcome to our booking page for the conference hall named <strong>{name}</strong>. This hall is ideal for various events, including corporate meetings, seminars, and workshops. With a capacity of <strong>{capacity}</strong> people, it provides a spacious and comfortable environment. Located at <strong>{location}</strong>, it's easily accessible for your convenience. For any inquiries, you can reach out at <strong>{contact}</strong>.</p>
      </div>

      <div className="content-section">
        <div className="booking-card">
          
          <h2>{name}</h2>
          <p><strong>Capacity:</strong> {capacity} people</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Contact:</strong> {contact}</p>
        </div>

        <div className="booking-form">
          <h2>Booking Form</h2>
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john.doe@example.com" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="123-456-7890" required />

            <label htmlFor="date">Date</label>
            <input type="date" id="date" required />

            <label htmlFor="message">Additional Information</label>
            <textarea id="message" rows="4" placeholder="Any special requests or requirements?" />

            <button type="submit">Submit Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './BookingPage.css';

// const BookingPage = () => {
//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);

//   const name = queryParams.get('name');
//   const capacity = queryParams.get('capacity');
//   const location = queryParams.get('location');
//   const contact = queryParams.get('contact');

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     date: '',
//     message: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           hallName: name,
//           capacity,
//           hallLocation: location,
//           hallContact: contact,
//         }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Booking successful:', result);
//         navigate('/confirmation'); // Redirect to a confirmation page
//       } else {
//         console.error('Booking failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="booking-container">
//       <div className="conference-info">
//         <h1>About the Conference Hall</h1>
//         <p>
//           Welcome to our booking page for the conference hall named{' '}
//           <strong>{name}</strong>. This hall is ideal for various events,
//           including corporate meetings, seminars, and workshops. With a capacity
//           of <strong>{capacity}</strong> people, it provides a spacious and
//           comfortable environment. Located at <strong>{location}</strong>,
//           it's easily accessible for your convenience. For any inquiries, you
//           can reach out at <strong>{contact}</strong>.
//         </p>
//       </div>

//       <div className="content-section">
//         <div className="booking-card">
//           <img src="/path/to/your/image.jpg" alt={name} /> {/* Use a relevant image here */}
//           <h2>{name}</h2>
//           <p><strong>Capacity:</strong> {capacity} people</p>
//           <p><strong>Location:</strong> {location}</p>
//           <p><strong>Contact:</strong> {contact}</p>
//         </div>

//         <div className="booking-form">
//           <h2>Booking Form</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               placeholder="John Doe"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="john.doe@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="123-456-7890"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="message">Additional Information</label>
//             <textarea
//               id="message"
//               rows="4"
//               placeholder="Any special requests or requirements?"
//               value={formData.message}
//               onChange={handleChange}
//             />

//             <button type="submit">Submit Booking</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookingPage;
