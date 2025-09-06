// src/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional 
          recipes served with a modern twist.
        </p>
        <Link 
          to="/booking" 
          className="cta-button"
          aria-label="Reserve a table at Little Lemon"
        >
          Reserve a Table
        </Link>
      </div>
   <img 
  src="./little-lemon-restaurant/images/restauranfood.jpg"          
  alt="Delicious Mediterranean food served at Little Lemon"         
  className="hero-image"       
/>
    </section>
  );
};

export default CallToAction;