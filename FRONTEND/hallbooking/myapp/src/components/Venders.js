import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { React, useState } from 'react';
import Modal from 'react-modal';
// import bcimg from "../asserts/images/background.jpg";
// import bands from "../asserts/images/bands.png";
// import cake from "../asserts/images/cake.png";
// import photo from "../asserts/images/camera.webp";
import catering from '../asserts/images/catering.jpeg';
import DJ from "../asserts/images/DJ.jpeg";
// import makeup from "../asserts/images/makeup.png";
import makeupimg from "../asserts/images/images1.jpeg";
import cine from "../asserts/images/Ram cine.jpeg";
import invit from "../asserts/images/Invit.jpeg";
// import meh from "../asserts/images/mehandis.webp";
import photograph from "../asserts/images/download1.jpeg";
import Navbar from './Navbar';
import VenderRegisteration from './VenderRegisteration';

import '../asserts/venders.css';
function Venders(){
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  }
  const bcstyle={
    // backgroundImage: `url(${bcimg})`,
    backgroundColor:'#b5e1f0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh', // Set the height to cover the entire viewport
    width: '100vw', 
  };
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
  return(
    <div class="hcontainer">
            <div class="header" style={bcstyle}>
              <Navbar/>

        <h2>Find  the  best  event  vendors  for  your  occasion</h2>
        <input type="text" placeholder='Search' class="search"/>
        <input type="text" placeholder='Location' class="search"/>

        <div class="searb">search</div>
      </div>
      <div class="vcenter">
      {/* <div class="vavailability">
          <div><img src={cake} alt="cake"></img></div>
          <div><img src={photo} alt="pc"></img></div>
          <div><img src={meh} alt="mehindi"></img></div>
          <div><img src={makeup} alt="makeup"></img></div>
          <div><img src={bands} alt="bands"></img></div>
        </div> */}
       <p class="popser">Popular Searches </p>

       <div class="vpopular">
       <Card sx={{ maxWidth: 325,marginLeft:'84px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={photograph}
          alt="green iguana"
        />
        <CardContent className='ccontent'>
          <Typography gutterBottom variant="h6" component="div">
            Party Hall
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}} size="small" color="primary">
          Request
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={makeupimg}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            Conference Hall
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Limited Halls Available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}} size="small" color="primary">
          Request
        </Button>
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={DJ}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            DJ
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Fun & Entertainment
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}}>
          Request
        </Button>
      </CardActions>
    </Card>
<div className='secondcontainer'>
       <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={catering}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            Catering
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Food Service Available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}} size="small" color="primary">
          Request
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={cine}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            Theatre
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}} size="small" color="primary">
          Request
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={invit}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            Invitation
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Traditional and Colourful
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={show} style={{color:'#ffff',backgroundColor:'tomato',height:'40px'}} size="small" color="primary">
          Request
        </Button>
      </CardActions>
    </Card>
   
    </div>
        </div>
      </div>
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
        <VenderRegisteration onClose={() => setVisible(false)} />
      </Modal>

      </div>
  );
};

export default Venders;


      