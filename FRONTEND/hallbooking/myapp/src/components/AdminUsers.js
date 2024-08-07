// import React from 'react';
// import { Link } from 'react-router-dom';

// import '../asserts/Admin.css';
// const AdminUsers = ({ users, editRow, deleteUser,addUser, closeForm }) => {
//   return (
    
//     <div className="admin-body">
//           <div className='header'>
//           <Link to='/AdminUsers' style={{textDecoration:'none'}}><div>DashBoard</div></Link>
//           <Link to='/Admin' style={{textDecoration:'none'}}><div>Users</div></Link>
//           <Link to='/AboutPage' style={{textDecoration:'none'}}><div>About</div></Link>
//           <Link to='/SignIn' style={{textDecoration:'none'}}><div>Sign Out</div></Link>
//         </div>
//       <div class='Appbar'>
//           BOOKINGS
//         </div>
//       <div className='dashboard'>
//         <div class='st'>
//         <div>
//           Available
//         </div>
//         <div>
//           Booked
//         </div>
//         <div>
//           Cancelled
//         </div>
//         <div>Total

//         </div>
//       </div>
//         <div class='admin-status'>
//             Status
//         </div>
        
// </div>
//     </div>
//   );
// };

// export default AdminUsers;

import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/Admin.css';
import statustd from '../asserts/images/1721929.png';


const AdminUsers = ({ users, editRow, deleteUser,addUser, closeForm }) => {
  return (
    
    <div className="admin-body">
          <div className='header'>
          <Link to='/AdminUsers' style={{textDecoration:'none'}}><div>DashBoard</div></Link>
          <Link to='/Admin' style={{textDecoration:'none'}}><div>Bookings</div></Link>
          <Link to='/AdminVender' style={{textDecoration:'none'}}><div>About</div></Link>
          <Link to='/SignIn' style={{textDecoration:'none'}}><div>Sign Out</div></Link>
        </div>
      <div class='Appbar'>
          <p>DashBoard</p>
          <input type="text" name="search" placeholder='Search' />

        </div>
      <div className='dashboard'>
        <div class='st'>
        <div>
          Available Halls
          <h1>100</h1>
        </div>
        <div>
          Booked Halls
          <h1>50</h1>
        </div>
        <div>
          Cancelled
          <h1>24</h1>
        </div>
        <div>Total
          <h1>150</h1>
        </div>
      </div>
        <div class='admin-status'>
            Status
            <br></br>
        <img src={statustd} style={{width:'40%',height:'80%',marginLeft:'25%'}} alt="d1" />
        </div>
        {/* <div class='admin-chart'>
            Chart<br></br>
            {/* <img src={status} style={{width:'60%'}} alt="d1" /> */}

        </div> 
      </div>
    // </div>
  );
};

export default AdminUsers;