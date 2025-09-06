// src/App.test.js
import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Import corrigé
import BookingForm from './BookingForm';
import { initializeTimes, timesReducer } from './App';

// Test 1: Vérifier le rendu du composant BookingForm
test('Renders the BookingForm heading', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
  };

  render(<BookingForm {...mockProps} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// Test 2: Vérifier la fonction initializeTimes
test('initializeTimes returns correct expected value', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

// Test 3: Vérifier la fonction updateTimes
test('updateTimes returns the same value provided in state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = {
    type: 'UPDATE_TIMES',
    payload: '2023-10-15'
  };

  const result = timesReducer(initialState, action);
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

// Test 4: Vérifier les attributs HTML5 de validation
test('Form inputs have correct validation attributes', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
  };

  render(<BookingForm {...mockProps} />);
  
  // Vérifier l'input date
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
  
  // Vérifier l'input guests
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');
});

// Test 5: Vérifier que le bouton submit est désactivé quand le formulaire est invalide
test('Submit button is disabled when form is invalid', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
  };

  render(<BookingForm {...mockProps} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});

// Test 6: Vérifier que le bouton submit est activé quand le formulaire est valide
test('Submit button is enabled when form is valid', async () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
  };

  render(<BookingForm {...mockProps} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });

  // Utiliser act pour les changements d'état
  await act(async () => {
    // Simuler la saisie d'une date
    dateInput.value = '2023-12-25';
    dateInput.dispatchEvent(new Event('change', { bubbles: true }));
    
    // Simuler la sélection d'une heure
    timeSelect.value = '18:00';
    timeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    
    // Simuler la saisie du nombre d'invités
    guestsInput.value = '4';
    guestsInput.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // Le bouton devrait maintenant être activé
  expect(submitButton).not.toBeDisabled();
});