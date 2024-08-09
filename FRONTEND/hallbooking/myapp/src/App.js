// React & Router V6
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'animate.css';
import AdminDashboard from "./components/admin/AdminDashboard";
import HallsAvailability from "./components/admin/HallsAvailability";
import SignIn from './components/admin/SignIn';
import Signup from './components/admin/Signup';
import BookingPage from './components/conference/BookingPage';
import Confer from './components/conference/Confer';
import Available from './components/hotels/Available';
import CheckoutPage from './components/payment/CheckoutPage';
import BookingSuccessPage from './components/success/BookingSuccessPage';
import Home from "./pages/home/Home";
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Users from './components/admin/Users';
import FacilityPage from './components/service/FacilityPage';
import LocationPage from './components/location/LocationPage';
import FindBookingPage from './components/find/FindBookingPage';
import ProfilePage from './components/admin/ProfilePage';


// import ManageRoomPage from './component/admin/ManageRoomPage';
// import EditRoomPage from './component/admin/EditRoomPage';
// import AddRoomPage from './component/admin/AddRoomPage';
// import ManageBookingsPage from '../component/admin/ManageBookingsPage';
// import EditBookingPage from './component/admin/EditBookingPage';
// import Pagination from './components/admin/Pagination';
// import RoomResult from './components/admin/RoomResult';
// import RoomSearch from './components/admin/RoomSearch';

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Example
scrollToTop();

function App() {

  return (
    // Route page 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/halls" element={<HallsAvailability />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/available" element={<Available />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/success" element={<BookingSuccessPage />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/conference" element={<Confer />} />
        <Route path="/facilities" element={<FacilityPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/findbooking" element={<FindBookingPage />} />

        {/* <Route path="/managebooking" element={<ManageBookingsPage />} /> */}
        {/* <Route path="/manageroompage" element={<ManageRoomPage />} /> */}
        {/* <Route path="/editroom" element={<EditRoomPage />} /> */}
        {/* <Route path="/editbooking" element={<EditBookingPage />} /> */}
        {/* <Route path="/addroom" element={<AddRoomPage/>} /> */}
        {/* <Route path="/pagination" element={<Pagination/>} /> */}
        {/* <Route path="/roomresult" element={<RoomResult/>} /> */}
        {/* <Route path="/roomsearch" element={<RoomSearch/>} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
