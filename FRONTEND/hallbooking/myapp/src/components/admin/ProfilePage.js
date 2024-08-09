import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Profile</h1>
      </header>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <p>Email: johndoe@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="edit-button">Edit Profile</button>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
