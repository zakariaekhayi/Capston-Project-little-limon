// src/Main.js
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

// Composants temporaires pour les pages manquantes
const About = () => <div style={{padding: '2rem'}}><h1>About Little Lemon</h1><p>Coming soon...</p></div>;
const Menu = () => <div style={{padding: '2rem'}}><h1>Our Menu</h1><p>Coming soon...</p></div>;
const OrderOnline = () => <div style={{padding: '2rem'}}><h1>Order Online</h1><p>Coming soon...</p></div>;
const Login = () => <div style={{padding: '2rem'}}><h1>Login</h1><p>Coming soon...</p></div>;

// Fonction pour initialiser les horaires disponibles
const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Reducer pour gérer les horaires disponibles
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : state;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());
  const navigate = useNavigate();

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const submitForm = (formData) => {
    const result = window.submitAPI ? window.submitAPI(formData) : true;
    if (result) {
      navigate('/booking-confirmed');
    }
    return result;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          } 
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;