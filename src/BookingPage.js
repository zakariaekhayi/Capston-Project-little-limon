// src/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, updateTimes, submitForm }) => {
  return (
    <div>
      <header>
        <h1>Reserve a Table</h1>
        <p>Book your perfect dining experience at Little Lemon</p>
      </header>
      <BookingForm 
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;