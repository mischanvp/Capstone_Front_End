import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './App'; // Adjust the import based on your file structure

test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM']; // Add mock available times
    const mockDispatch = jest.fn(); // Mock dispatch function
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

    const headingElement = screen.getByText("Make your Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize times should return expected array', () => {
  const times = initializeTimes();
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

test('updates times should be returned if date changed', () => {
  const state = initializeTimes();
  const action = { type: 'update_time', payload: { date: '2024-09-10' } };
  const updatedTimes = updateTimes(state, action);
  expect(updatedTimes).toEqual(['14:00', '17:00']);
});