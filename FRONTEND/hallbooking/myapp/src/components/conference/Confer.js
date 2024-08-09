// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faCheck, faTimes, faInfoCircle, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
// import './Confer.css';

// const Confer = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [showMore, setShowMore] = useState(false);

//   const handleViewMore = () => {
//     setShowMore(!showMore);
//   };

//   const conferenceHalls = [
//     { name: 'Conference Room 1', capacity: 50, availability: true, imageUrl: '/images/conference1.jpg', location: '123 Business St', contact: '123-456-7890' },
//     { name: 'Conference Room 2', capacity: 30, availability: false, imageUrl: '/images/conference2.jpg', location: '456 Corporate Ave', contact: '234-567-8901' },
//     { name: 'Conference Room 3', capacity: 100, availability: true, imageUrl: '/images/conference3.jpg', location: '789 Enterprise Rd', contact: '345-678-9012' },
//     { name: 'Conference Room 4', capacity: 75, availability: false, imageUrl: '/images/conference4.jpg', location: '321 Industry Blvd', contact: '456-789-0123' },
//     { name: 'Conference Room 5', capacity: 60, availability: true, imageUrl: '/images/conference5.jpg', location: '111 Meeting Ln', contact: '567-890-1234' },
//     { name: 'Conference Room 6', capacity: 45, availability: true, imageUrl: '/images/conference6.jpg', location: '222 Event Dr', contact: '678-901-2345' },
//     { name: 'Conference Room 7', capacity: 80, availability: false, imageUrl: '/images/conference7.jpg', location: '333 Gathering Pl', contact: '789-012-3456' },
//     { name: 'Conference Room 8', capacity: 90, availability: true, imageUrl: '/images/conference8.jpg', location: '444 Seminar St', contact: '890-123-4567' },
//     { name: 'Conference Room 9', capacity: 90, availability: true, imageUrl: '/images/conference8.jpg', location: '444 Seminar St', contact: '890-123-4567' },
//   ];

//   const filteredHalls = conferenceHalls.filter(hall =>
//     hall.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="conferenceContainer">
//       <header className="header">
//         <h1>Check Conference Hall Availability</h1>
//       </header>
//       <div className="searchBar">
//         <input
//           type="text"
//           placeholder="Search conference halls..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <div className="calendar">
//           <FontAwesomeIcon icon={faCalendarAlt} className="calendarIcon" />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={e => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="hallsList">
//         {filteredHalls.slice(0, showMore ? filteredHalls.length : 4).map(hall => (
//           <div key={hall.name} className="fpItem">
//             <img src={hall.imageUrl} alt={hall.name} className="fpImg" />
//             <span className="fpName">{hall.name}</span>
//             <span className="fpCity"><FontAwesomeIcon icon={faMapMarkerAlt} className="infoIcon" /> {hall.location}</span>
//             <span className="fpPrice">Capacity: {hall.capacity} people</span>
//             <div className="fpRating">
//               <span>Availability: </span>
//               {hall.availability ? (
//                 <FontAwesomeIcon icon={faCheck} className="available" />
//               ) : (
//                 <FontAwesomeIcon icon={faTimes} className="unavailable" />
//               )}
//             </div>
//             <div className="hallContact">
//               <FontAwesomeIcon icon={faPhone} className="infoIcon" /> {hall.contact}
//             </div>
//             <div className="fpRating">
//               <button>BOOK</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="viewMoreContainer">
//         <button className="viewMoreButton" onClick={handleViewMore}>
//           {showMore ? 'Show Less' : 'View More'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Confer;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTimes, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Confer.css';

import con1 from '../../assets/c1.jpeg';
import con2 from '../../assets/c2.jpeg';
import con3 from '../../assets/c3.jpeg';
import con4 from '../../assets/c4.jpeg';
import con5 from '../../assets/c5.jpeg';
import con6 from '../../assets/c6.jpeg';
import con7 from '../../assets/c7.jpeg';
import con8 from '../../assets/c8.jpeg';
import con9 from '../../assets/c9.jpeg';

const Confer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleBook = (hall) => {
    // Redirect to the booking page with hall information
    navigate(`/booking?name=${encodeURIComponent(hall.name)}&capacity=${hall.capacity}&location=${encodeURIComponent(hall.location)}&contact=${hall.contact}`);
  };

  const conferenceHalls = [
    { name: 'Conference Room 1', capacity: 50, availability: true, imageUrl: con2, location: '123 Business St', contact: '123-456-7890' },
    { name: 'Conference Room 2', capacity: 30, availability: false, imageUrl: con1, location: '456 Corporate Ave', contact: '234-567-8901' },
    { name: 'Conference Room 3', capacity: 100, availability: true, imageUrl: con3, location: '789 Enterprise Rd', contact: '345-678-9012' },
    { name: 'Conference Room 4', capacity: 75, availability: false, imageUrl: con4, location: '321 Industry Blvd', contact: '456-789-0123' },
    { name: 'Conference Room 5', capacity: 60, availability: true, imageUrl: con6, location: '111 Meeting Ln', contact: '567-890-1234' },
    { name: 'Conference Room 6', capacity: 45, availability: true, imageUrl: con5, location: '222 Event Dr', contact: '678-901-2345' },
    { name: 'Conference Room 7', capacity: 80, availability: false, imageUrl: con7, location: '333 Gathering Pl', contact: '789-012-3456' },
    { name: 'Conference Room 8', capacity: 90, availability: true, imageUrl: con8, location: '444 Seminar St', contact: '890-123-4567' },
    { name: 'Conference Room 9', capacity: 90, availability: true, imageUrl: con9, location: '444 Seminar St', contact: '890-123-4567' },
  ];

  const filteredHalls = conferenceHalls.filter(hall =>
    hall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="conferenceContainer">
      <header className="header1">
        <h1>Conference Hall Availability</h1>
      </header>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search conference halls..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="calendar">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendarIcon" />
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
      <div className="hallsList">
        {filteredHalls.slice(0, showMore ? filteredHalls.length : 4).map(hall => (
          <div key={hall.name} className="fpItem">
            <img src={hall.imageUrl} alt={hall.name} className="fpImg" />
            <span className="fpName">{hall.name}</span>
            <span className="fpCity"><FontAwesomeIcon icon={faMapMarkerAlt} className="infoIcon" /> {hall.location}</span>
            <span className="fpPrice">Capacity: {hall.capacity} people</span>
            <div className="fpRating">
              <span>Availability: </span>
              {hall.availability ? (
                <FontAwesomeIcon icon={faCheck} className="available" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="unavailable" />
              )}
            </div>
            <div className="hallContact">
              <FontAwesomeIcon icon={faPhone} className="infoIcon" /> {hall.contact}
            </div>
            <div className="fpRating">
              <button onClick={() => handleBook(hall)}>BOOK</button>
            </div>
          </div>
        ))}
      </div>
      <div className="viewMoreContainer">
        <button className="viewMoreButton" onClick={handleViewMore}>
          {showMore ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
}

export default Confer;
