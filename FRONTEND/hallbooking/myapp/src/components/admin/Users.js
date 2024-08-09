
import React, { useEffect, useState } from 'react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users who have booked (mock data or from an API)
    const fetchData = async () => {
      const response = await fetch('/api/bookings'); // Replace with your actual API endpoint
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="users-container">
      <h1>Users List</h1>
      <div className="users-list">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <h2>{user.fullName}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Event Date:</strong> {user.eventDate}</p>
              <p><strong>Special Requests:</strong> {user.specialRequests || 'None'}</p>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
