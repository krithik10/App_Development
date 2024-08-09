import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,faServer,faBookBookmark, faDoorOpen, faContactCard, faCalendarDays, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });

  const handleOption = (name, operation) => {
    setOptions(prev => ({ ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1 }));
  };

  const handleSearch = () => {
    navigate("/available", { state: { destination, date, options } });
  };

  const handleSignIn = () => {
    navigate("/SignIn");
  };

  const handleHotelsClick = () => {
    navigate("/available");
  };

  const handleConferenceClick = () => {
    navigate("/conference");
  };
  const handleFacilitiesClick = () => {
    navigate("/facilities");
  };
  const handleFindbookingClick = () => {
    navigate("/findbooking");
  };

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span >Stay</span>
          </div>
          {/* <div className="headerListItem" onClick={handleHotelsClick}>
            <FontAwesomeIcon icon={faDoorOpen} />
            <span>Hotels</span>
          </div> */}
          <div className="headerListItem" onClick={handleConferenceClick}>
            <FontAwesomeIcon icon={faContactCard} />
            <span>Conference</span>
          </div>
          <div className="headerListItem" onClick={handleFacilitiesClick}>
            <FontAwesomeIcon icon={faServer} />
            <span>Facilities</span>
          </div>
          <div className="headerListItem" onClick={handleFindbookingClick}>
            <FontAwesomeIcon icon={faBookBookmark} />
            <span>Booking Details</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
            </p>
            <button className="headerBtn" onClick={handleSignIn}>Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder='Search Hotels'
                  className='headerSearchInput'
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="dateHeaderSearch"
                  />
                )}
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumb">{options.adult}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumb">{options.children}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumb">{options.room}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItems">
                <button className="headerBtn-search" onClick={handleSearch}>
                  <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
