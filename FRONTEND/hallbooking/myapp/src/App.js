import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './asserts/home.css';
import './asserts/navbar.css';
import './asserts/style.css';
import Admin from './components/Admin';
import AdminUsers from './components/AdminUsers';
import Home from './components/Home';
import Invitation from './components/Invitation';
import Registeration from './components/Registeration';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Venders from './components/Venders';
import Venues from './components/Venues';
import AboutPage from './components/AboutPage.js';
import PaymentPage from "./components/PaymentPage.js";


const storeUsersInLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const App = () => {
  const [users, setUsers] = useState(getUsersFromLocalStorage());

  const addUser= (user) => {
    user.id = users.length + 1;
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    storeUsersInLocalStorage(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    storeUsersInLocalStorage(updatedUsers);
  };

  const editRow = (user) => {
    console.log('Editing user:', user);
  };

  return (
    <Router>
      <div>
        {/* Include your Navbar component */}
        <Routes>
          <Route path="/"  element={<Home addUser={addUser} />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venders" element={<Venders />} />
          <Route path="/Invitation" element={<Invitation />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin 
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            addUser={addUser}
            closeForm={() => console.log('Form closed')}
            />} />
            <Route path="/AdminUsers" element={<AdminUsers/>} />
          <Route path="/registeration" element={<Registeration addUser={addUser}/>} />
          <Route path="/payment" element={<PaymentPage addUser={addUser}/>} />
          <Route path="/AboutPage" element={<AboutPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
