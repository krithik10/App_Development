import React, { useState } from 'react';
import './mailList.css';

const MailList = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail(''); 

      alert('Report sent to your mail successfully');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {isSubscribed && (
        <p className="subscriptionSuccessMessage">You have subscribed successfully!</p>
      )}
    </div>
  );
};

export default MailList;
