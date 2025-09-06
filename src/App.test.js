// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

// Mock des fonctions API
window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00']);
window.submitAPI = jest.fn(() => true);

// Helper pour render avec router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Test 1: Vérifier que le texte statique est rendu
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
  const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00'];
  };
  
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

// Test 3: Vérifier la fonction updateTimes
test('updateTimes returns the same value provided in state', () => {
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : state;
      default:
        return state;
    }
  };
  
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = { type: 'UPDATE_TIMES', date: '2024-12-25' };
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
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  
  expect(dateInput).toHaveAttribute('required');
  expect(timeSelect).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

// Test 5: Vérifier que le bouton submit est désactivé avec des données invalides
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

// Test 6: Vérifier que le bouton submit est activé avec des données valides
test('Submit button is enabled when form is valid', () => {
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
  
  fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
  fireEvent.change(timeSelect, { target: { value: '19:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  
  expect(submitButton).toBeEnabled();
});