import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1>Hall_Booking</h1>
      </header>
      <section className="content">
        <div className="image-container">
        </div>
        <div className="text-container">
          <h2>Welcome to [H_B]</h2>
          <p>
            At H_B, we provide the perfect venue for all your special events.
            Whether you’re planning a wedding, a corporate event, or a private party,
            our hall offers a beautiful and versatile space to make your event unforgettable.
          </p>
          <p>
            Our state-of-the-art facilities, experienced staff, and commitment to excellence
            ensure that every detail of your event is executed to perfection. We invite you to
            explore our venue and discover why [Your Hall Name] is the ideal choice for your next event.
          </p>
          <p>
            Booking with us is easy and convenient. You can explore our available halls, check availability, and make reservations directly through our website. Our customer support team is available 24/7 to assist with any questions or special requests.
          </p>
          <p>
            We also offer customizable packages to meet your specific needs. From audiovisual equipment to specialized decor, our team is here to help you create the perfect atmosphere for your event. Our partners include top catering services, decorators, and event planners to ensure a seamless experience from start to finish.
          </p>
          <p>
            Join thousands of satisfied clients who have made their events extraordinary with [Your Hall Name]. We look forward to hosting you and your guests at our venue. Thank you for choosing us for your special occasion.
          </p>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Convenient Location</h3>
          <p>Located in the heart of the city with ample parking and easy access.</p>
        </div>
        <div className="feature">
          <i className="fas fa-cocktail"></i>
          <h3>Elegant Catering</h3>
          <p>Gourmet catering services to delight your guests.</p>
        </div>
        <div className="feature">
          <i className="fas fa-star"></i>
          <h3>Exceptional Service</h3>
          <p>Our dedicated team ensures a seamless event experience.</p>
        </div>
        <div className="feature">
          <i className="fas fa-calendar-alt"></i>
          <h3>Flexible Booking</h3>
          <p>Flexible booking options to accommodate last-minute changes.</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h3>Spacious Accommodations</h3>
          <p>Ample space to host events of any size, from intimate gatherings to large conferences.</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Health & Safety</h3>
          <p>Committed to maintaining high health and safety standards for all our guests.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 [H_B]. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <Link to="/contact">Contact Us</Link>
          
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;