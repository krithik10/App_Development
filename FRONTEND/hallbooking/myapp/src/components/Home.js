import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import Modal from 'react-modal';
import meet from "../asserts/images/download (2).jpeg";
import hall from "../asserts/images/download.jpeg"
import br from "../asserts/images/birthdy.png";
import party from "../asserts/images/download (1).jpeg"
import banquet from "../asserts/images/city-hall.png";
import bang from "../asserts/images/download (3).jpeg";
import pool from "../asserts/images/pool-party.png";
import rest from "../asserts/images/rest.png";
import team from "../asserts/images/team.png";
import eng from "../asserts/images/wedding-rings.png";
import wed from "../asserts/images/wed.png";
import Navbar from './Navbar';
import Registeration from './Registeration';




function Home({addUser}){
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  }
  const customStyles = {
    content: {
      width: '31%',        
      height: 'auto',      
      margin: 'auto',       
      padding: '20px',     
      borderRadius: '10px', 
      backgroundColor: '#f8f9fa', 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };
  const bcstyle={
    backgroundColor:'#b5e1f0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh', 
    width: '100vw', 
  };
  return(
    <div class="hcontainer">
            <div class="header" style={bcstyle}>
              <Navbar/>

        <h2>Find & Book The Best Venue For Every Single Event</h2>
        <input type="text" placeholder='Search' class="search"/>
        <input type="text" placeholder='Location' class="search"/>
        <div class="searb">search</div>
      </div>


      
      <div class="hcenter">
        <table cellPadding="100%">
          <tr>
            <td><img src={wed} onClick={show} alt="Wedding" className="table-image" /></td>
            <td><img src={br} onClick={show} alt="Birthday" className="table-image" /></td>
            <td><img src={eng} onClick={show} alt="Engagement" className="table-image" /></td>
            <td><img src={pool} onClick={show} alt="Pool Party" className="table-image" /></td>
            <td><img src={rest} onClick={show} alt="Hall" className="table-image" /></td>
            <td><img src={banquet} onClick={show} alt="City" className="table-image" /></td>
            <td><img src={team} onClick={show} alt="Team" className="table-image" /></td>
          </tr>
          
          <tr>
            <td className="text">Wedding</td>
            <td className="text">Birthday</td>
            <td className="text">Engagement</td>
            <td className="text">Pool Party</td>
            <td className="text">Hall</td>
            {/* <td className="text">Cocktail Party</td> */}
            <td className="text">Banquet</td>
            <td className="text">Corperate Meeting</td>
          </tr>
        </table>
        <span class="category">Available Halls By Category</span>
      <div class="vender">
      <table cellPadding="100%">
     
          <tr>
           
            <td><img src={hall} alt="conference halls" className="table-image" /></td>
            <td><img src={bang} alt="banquet halls" className="table-image" /></td>
            <td><img src={meet} alt="meeting rooms" className="table-image" /></td>
            
          </tr>
          <tr>
           
           <td className="text">Conference Halls</td>
           <td className="text">Banquet Halls</td>
           <td className="text">Meeting Rooms</td>
           {/* <td className="text">Meeting Rooms</td>
           <td className="text">Meeting Rooms</td> */}
         </tr>
         <tr>
         <td><img src={party} alt="party halls" className="table-image" /></td>
         </tr>
         <tr>
         <td className="text">Party Halls</td>
         </tr>
        
        </table>
        </div>
    </div>
<br></br>


    <div className="footer">
        <div className="contact-info">
        <h4>Contact Info</h4>
          <p>Email: example@gmail.com</p>
          <p>Phone: +123-456-7890</p>
          
        </div>
        <div class="formore">
          <h4>Follow Us</h4><br></br>
          <div><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
          <div><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
          <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
          <div><FontAwesomeIcon icon={faWhatsapp} size="2x" /></div>
        </div>
        <br></br>
        <span>&copy; 2024 VenueTrack. All rights reserved.</span>
        </div>
        <Modal
        isOpen={visible}
       style={customStyles}
        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} addUser={addUser} />
      </Modal>




    </div>
  );
}
export default Home;