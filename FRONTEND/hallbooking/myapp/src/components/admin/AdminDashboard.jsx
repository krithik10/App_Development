import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faDoorOpen, faUser, faUsers, faBell, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin</h2>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="#manageroompage">Bookings</Link></li>
          <li><Link to="/halls">Halls</Link></li> 
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/signin">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Welcome to the Admin Dashboard</h1>
        </header>
        <div className="content">
          <div className="card-container">
            <div className="card">
              <h3>Total Bookings</h3>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <p>60</p>
            </div>
            <div className="card">
              <h3>Total Halls</h3>
              <FontAwesomeIcon icon={faDoorOpen} className="icon" />
              <p>15</p>
            </div>
            <div className="card">
              <h3>Total Users</h3>
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <p>15</p>
            </div>
          </div>

          <div className="stats-container">
            <div className="stats-card">
              <h3>Available Halls</h3>
              <p>8</p>
            </div>
            <div className="stats-card">
              <h3>Upcoming Events</h3>
              <p>5</p>
            </div>
            <div className="stats-card">
              <h3>Recent Bookings</h3>
              <p>12</p>
            </div>
          </div>

          <div className="notifications">
            <h3>Notifications</h3>
            <div className="notification-item">
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <p>System maintenance scheduled for tonight.</p>
            </div>
            <div className="notification-item">
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <p>New user registrations have been recorded.</p>
            </div>
          </div>

          <div className="calendar">
            <h3>Upcoming Bookings</h3>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            {/* You can integrate a calendar component here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
