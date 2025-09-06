// src/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!date || !time || guests < 1 || guests > 10) {
      return;
    }

    const formData = {
      date,
      time,
      guests: parseInt(guests),
      occasion
    };

    submitForm(formData);
  };

  const isFormValid = date && time && guests >= 1 && guests <= 10;

  return (
    <div className="booking-page">
      <h1 id="booking-heading">Book Now</h1>
      <div className="booking-form-container">
        <form 
          className="booking-form"
          onSubmit={handleSubmit} 
          aria-label="Reservation form"
        >
          <div className="form-group">
            <label htmlFor="res-date">Choose date</label>
            <input 
              type="date" 
              id="res-date"
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="res-time">Choose time</label>
            <select 
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-required="true"
            >
              <option value="">Select a time</option>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input 
              type="number" 
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select 
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
            </select>
          </div>
          
          <button 
            type="submit"
            disabled={!isFormValid}
            aria-label="Make your reservation"
          >
            Make Your reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;