// src/App.js
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import './App.css';

// Fonction pour initialiser les heures disponibles
export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Reducer pour gérer les heures disponibles
export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Pour l'instant, on retourne les mêmes heures
      // Dans une vraie app, on ferait un appel API ici
      return ['17:00', '18:00', '19:00', '20:00', '21:00'];
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

  const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const submitForm = (formData) => {
    // Simuler la soumission du formulaire
    console.log('Form submitted:', formData);
    
    // Rediriger vers la page de confirmation
    window.location.href = '/little-lemon-restaurant/booking-confirmed';
    
    return true; // Retourner true pour indiquer le succès
  };

  return (
    <Router basename="/little-lemon-restaurant">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;