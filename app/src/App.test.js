import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './components/Api';


test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM']; // Add mock available times
    const mockDispatch = jest.fn(); // Mock dispatch function
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

    const headingElement = screen.getByText("Make your Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize times should return non empty array', async () => {
  const times = await initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updated times should be returned if date changed', async () => {
  const state = await initializeTimes();
  const action = { type: 'update_time', payload: { date: '2024-09-11' } };
  const updatedTimes = updateTimes(state, action);
  expect(updatedTimes).toEqual(["17:00", "17:30", "18:30", "19:00", "20:30", "21:00", "22:00", "23:30"]);
});