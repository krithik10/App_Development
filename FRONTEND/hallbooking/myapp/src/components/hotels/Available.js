// import React, { useState } from 'react';
// import "./Available.css";

// const Available = () => {
//   const [showMore, setShowMore] = useState(false);

//   const handleViewMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="availableContainer">
//       <h2 className="availableTitle">Explore Our Top Hotels</h2>
//       <p className="availableDescription">
//         Discover a curated selection of top hotels from around the world. Whether you're planning a luxurious getaway or a cozy retreat, our featured hotels offer the best in comfort, style, and value. Browse through our collection and find the perfect place for your next stay.
//       </p>
//       <div className="fp">
//         <div className="fpItem">
//           <img
//             src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//             alt=""
//             className="fpImg"
//           />
//           <span className="fpName">Aparthotel Stare Miasto</span>
//           <span className="fpCity">Madrid</span>
//           <span className="fpPrice">Starting from $120</span>
//           <div className="fpRating">
//             <button>BOOK</button>
//           </div>
//         </div>
//         <div className="fpItem">
//           <img
//             src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
//             alt=""
//             className="fpImg"
//           />
//           <span className="fpName">Comfort Suites Airport</span>
//           <span className="fpCity">Austin</span>
//           <span className="fpPrice">Starting from $140</span>
//           <div className="fpRating">
//             <button>BOOK</button>
//           </div>
//         </div>
//         <div className="fpItem">
//           <img
//             src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
//             alt=""
//             className="fpImg"
//           />
//           <span className="fpName">Four Seasons Hotel</span>
//           <span className="fpCity">Lisbon</span>
//           <span className="fpPrice">Starting from $99</span>
//           <div className="fpRating">
//             <button>BOOK</button>
//           </div>
//         </div>
//         {showMore && (
//           <>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//             <div className="fpItem">
//               <img
//                 src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">Hilton Garden Inn</span>
//               <span className="fpCity">Berlin</span>
//               <span className="fpPrice">Starting from $105</span>
//               <div className="fpRating">
//                 <button>BOOK</button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="viewMoreContainer">
//         <button className="viewMoreButton" onClick={handleViewMore}>
//           {showMore ? 'Show Less' : 'View More'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Available;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTimes, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Available.css';
import img1 from '../../assets/download (1).jpeg';
import img2 from '../../assets/download (2).jpeg';
import img4 from '../../assets/download (3).jpeg';
import img3 from '../../assets/images.jpeg';

const Available = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleBook = (hotel) => {
    navigate(`/booking?name=${encodeURIComponent(hotel.name)}&capacity=${hotel.capacity}&location=${encodeURIComponent(hotel.location)}&contact=${hotel.contact}`);
  };

  const hotels = [
    { name: 'Riverside Resort', rooms: 50, availability: true, imageUrl: img3, location: '12 Main St', contact: '555-1234' },
    { name: 'City Center Hotel', rooms: 60, availability: false, imageUrl: img4, location: '34 Second St', contact: '555-5678' },
    { name: 'Royal Garden Hotel', rooms: 100, availability: true, imageUrl: '/images/hotelC.jpg', location: '56 Third St', contact: '555-9101' },
    { name: 'Oasis Hotel', rooms: 80, availability: false, imageUrl: img1, location: '78 Fourth St', contact: '555-1213' },
    { name: 'Crystal Bay Resort', rooms: 25, availability: true, imageUrl: '/images/hotelE.jpg', location: '90 Fifth St', contact: '555-1415' },
    { name: 'The Majestic Inn', rooms: 75, availability: true, imageUrl: '/images/hotelF.jpg', location: '11 Sixth St', contact: '555-1617' },
    { name: 'Grand Palace Hotel', rooms: 45, availability: false, imageUrl: '/images/hotelG.jpg', location: '22 Seventh St', contact: '555-1819' },
    { name: 'The Tranquil Bay Resort', rooms: 73, availability: true, imageUrl: '/images/hotelH.jpg', location: '33 Eighth St', contact: '555-2021' },
    { name: 'Blue Horizon Resort', rooms: 50, availability: true, imageUrl: img2, location: '44 Ninth St', contact: '555-2324' },
  ];

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="availableContainer">
      <header className="availableTitle">
        <h1>Top Hotels near by</h1>
      </header>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search hotels..."
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
        {filteredHotels.slice(0, showMore ? filteredHotels.length : 4).map(hotel => (
          <div key={hotel.name} className="fpItem">
            <img src={hotel.imageUrl} alt={hotel.name} className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <span className="fpCity"><FontAwesomeIcon icon={faMapMarkerAlt} className="infoIcon" /> {hotel.location}</span>
            <span className="fpPrice">rooms: {hotel.rooms} </span>
            <div className="fpRating">
              <span>Availability: </span>
              {hotel.availability ? (
                <FontAwesomeIcon icon={faCheck} className="available" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="unavailable" />
              )}
            </div>
            <div className="hallContact">
              <FontAwesomeIcon icon={faPhone} className="infoIcon" /> {hotel.contact}
            </div>
            <div className="fpRating">
              <button onClick={() => handleBook(hotel)}>BOOK</button>
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

export default Available;
