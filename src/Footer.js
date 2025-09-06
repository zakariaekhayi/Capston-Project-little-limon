// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src="./little-lemon-restaurant/images/Logo.svg" 
            alt="Little Lemon restaurant logo" 
            className="footer-logo"
          />
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <nav aria-label="Footer navigation">
            <ul>
              <li><Link to="/" aria-label="Home page">Home</Link></li>
              <li><Link to="/about" aria-label="About us">About</Link></li>
              <li><Link to="/menu" aria-label="View our menu">Menu</Link></li>
              <li><Link to="/booking" aria-label="Reserve a table">Reservations</Link></li>
              <li><Link to="/order" aria-label="Order online">Order Online</Link></li>
              <li><Link to="/login" aria-label="Login to your account">Login</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>123 Main Street</p>
            <p>Chicago, IL 60601</p>
            <p>Phone: (312) 555-0123</p>
            <p>Email: info@littlelemon.com</p>
          </address>
        </div>
        
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-links">
            <a href="https://facebook.com/littlelemon" aria-label="Follow us on Facebook">Facebook</a>
            <a href="https://instagram.com/littlelemon" aria-label="Follow us on Instagram">Instagram</a>
            <a href="https://twitter.com/littlelemon" aria-label="Follow us on Twitter">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;