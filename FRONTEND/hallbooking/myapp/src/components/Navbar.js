import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ph from "../asserts/images/placeholder.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="title">
        <img src={ph} alt="Logo" className="logo" />
        <p>H_B</p>
      </div>
      <div className="navbar">
        <div><Link to='/' style={{textDecoration:'none',color:'black'}}>HOME</Link></div>
        <div><Link to ="/venues" style={{textDecoration:'none',color:'black'}}>VENUES</Link></div>
        <div><Link to="/venders" style={{textDecoration:'none',color:'black'}}>FOR MORE</Link></div>
        <div><Link to="/Invitation" style={{textDecoration:'none',color:'black'}} target="_blank">REGISTERATION</Link></div>
        <div><Link to="/Payment" style={{textDecoration:'none',color:'black'}} target="_blank">PAYMENT</Link></div>
      </div>
        <span><Link to='/SignIn'><FontAwesomeIcon icon={faCircleUser} style={{float:'right',position:'absolute',top:'10%',color:'black',left:'92%'}} size='2x' ></FontAwesomeIcon></Link></span>
    </div>
  );
}

export default Navbar;
