import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocation } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className="logo">BOOKoKOOB</span>
        <div className="navItems">
          <FontAwesomeIcon icon={faBars} className="btnMenu" />
          <Link to="/location" className="navButton">
            <FontAwesomeIcon icon={faLocation} className="profileIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;