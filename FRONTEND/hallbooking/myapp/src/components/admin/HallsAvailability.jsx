
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import './HallsAvailability.css';

// const HallsAvailability = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const halls = [
//     { name: 'Hall A', capacity: 100, availability: true, imageUrl: '/images/hall-a.jpg' },
//     { name: 'Hall B', capacity: 50, availability: false, imageUrl: '/images/hall-b.jpg' },
//     { name: 'Hall C', capacity: 200, availability: true, imageUrl: '/images/hall-c.jpg' },
//     { name: 'Hall D', capacity: 150, availability: false, imageUrl: '/images/hall-d.jpg' },
//   ];

//   const filteredHalls = halls.filter(hall =>
//     hall.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="halls-container">
//       <header className="header">
//         <h1>Check Hall Availability</h1>
//       </header>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search halls..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <div className="calendar">
//           <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={e => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="halls-list">
//         {filteredHalls.map(hall => (
//           <div key={hall.name} className="hall-card">
//             <img src={hall.imageUrl} alt={hall.name} className="hall-image" />
//             <div className="hall-info">
//               <h2>{hall.name}</h2>
//               <p>Capacity: {hall.capacity} people</p>
//               <p>
//                 Availability:
//                 {hall.availability ? (
//                   <FontAwesomeIcon icon={faCheck} className="available" />
//                 ) : (
//                   <FontAwesomeIcon icon={faTimes} className="unavailable" />
//                 )}
//               </p>
//             </div>
//             <div className="hall-details">
//               <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
//               <p>More details about {hall.name}.</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // export default HallsAvailability;
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faCheck, faTimes, faInfoCircle, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
// import './HallsAvailability.css';

// const HallsAvailability = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const halls = [
//     { name: 'Hall A', capacity: 100, availability: true, imageUrl: './assets/download.jpeg', location: '123 Main St', contact: '123-456-7890' },
//     { name: 'Hall B', capacity: 50, availability: false, imageUrl: '/images/hall-b.jpg', location: '456 Elm St', contact: '234-567-8901' },
//     { name: 'Hall C', capacity: 200, availability: true, imageUrl: '/images/hall-c.jpg', location: '789 Oak St', contact: '345-678-9012' },
//     { name: 'Hall D', capacity: 150, availability: false, imageUrl: '/images/hall-d.jpg', location: '321 Pine St', contact: '456-789-0123' },
//   ];

//   const filteredHalls = halls.filter(hall =>
//     hall.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="halls-container">
//       <header className="header">
//         <h1>Check Hall Availability</h1>
//       </header>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search halls..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <div className="calendar">
//           <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={e => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="halls-list">
//         {filteredHalls.map(hall => (
//           <div key={hall.name} className="hall-card">
//             <img src={hall.imageUrl} alt={hall.name} className="hall-image" />
//             <div className="hall-info">
//               <h2>{hall.name}</h2>
//               <p><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /> {hall.location}</p>
//               <p><FontAwesomeIcon icon={faPhone} className="info-icon" /> {hall.contact}</p>
//               <p>Capacity: {hall.capacity} people</p>
//               <p>
//                 Availability: 
//                 {hall.availability ? (
//                   <FontAwesomeIcon icon={faCheck} className="available" />
//                 ) : (
//                   <FontAwesomeIcon icon={faTimes} className="unavailable" />
//                 )}
//               </p>
//             </div>
//             <div className="hall-details">
//               <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
//               <p>More details about {hall.name}.</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HallsAvailability;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTimes, faInfoCircle, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './HallsAvailability.css';

const HallsAvailability = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const halls = [
    { name: 'Hall A', capacity: 100, availability: true, img1: '/assets/download.jpeg', location: '123 Main St', contact: '123-456-7890' },
    { name: 'Hall B', capacity: 50, availability: false, imageUrl: '/images/hall-b.jpg', location: '456 Elm St', contact: '234-567-8901' },
    { name: 'Hall C', capacity: 200, availability: true, imageUrl: '/images/hall-c.jpg', location: '789 Oak St', contact: '345-678-9012' },
    { name: 'Hall D', capacity: 150, availability: false, imageUrl: '/images/hall-d.jpg', location: '321 Pine St', contact: '456-789-0123' },
  ];

  const filteredHalls = halls.filter(hall =>
    hall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="halls-container">
      <header className="header">
        <h1>Check Hall Availability</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search halls..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="calendar">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
      <div className="halls-list">
        {filteredHalls.map(hall => (
          <div key={hall.name} className="hall-card">
            <img src={hall.img1} alt={hall.name} className="hall-image" />
            <div className="hall-info">
              <h2>{hall.name}</h2>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /> {hall.location}</p>
              <p><FontAwesomeIcon icon={faPhone} className="info-icon" /> {hall.contact}</p>
              <p>Capacity: {hall.capacity} people</p>
              <p>
                Availability: 
                {hall.availability ? (
                  <FontAwesomeIcon icon={faCheck} className="available" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} className="unavailable" />
                )}
              </p>
            </div>
            <div className="hall-details">
              <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
              <p>More details about {hall.name}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HallsAvailability;
