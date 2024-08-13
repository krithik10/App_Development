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
import FacilityPage from './components/service/FacilityPage';
import LocationPage from './components/location/LocationPage';
import FindBookingPage from './components/find/FindBookingPage';
import ProfilePage from './components/admin/AdminProfile';
import BookingConfirmation from './components/conference/BookingConfirmation';
import AdminEventDetails from './components/admin/AdminEventDetails';
import FeedbackForm from './components/feedback/FeedbackForm';
import AllBookingsPage from './components/admin/AllBookingsPage';
import AllUsersPage from './components/admin/AllUsersPage';

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
        <Route path="/conference" element={<Confer />} />
        <Route path="/facilities" element={<FacilityPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/findbooking" element={<FindBookingPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/admin-events" element={<AdminEventDetails />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/display" element={<AllBookingsPage />} />
        <Route path="/users" element={<AllUsersPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
