// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav aria-label="Main navigation">
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/" aria-label="Home page">Home</Link>
        </li>
        <li>
          <Link to="/about" aria-label="About us">About</Link>
        </li>
        <li>
          <Link to="/menu" aria-label="View our menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking" aria-label="Reserve a table">Reservations</Link>
        </li>
        <li>
          <Link to="/order" aria-label="Order online">Order Online</Link>
        </li>
        <li>
          <Link to="/login" aria-label="Login to your account">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;