// src/ConfirmedBooking.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <section aria-labelledby="confirmation-heading">
      <h1 id="confirmation-heading">Booking Confirmed!</h1>
      <p>Your table has been successfully reserved at Little Lemon.</p>
      <p>We look forward to serving you!</p>
      <Link to="/" aria-label="Return to homepage">
        Return to Homepage
      </Link>
    </section>
  );
};

export default ConfirmedBooking;