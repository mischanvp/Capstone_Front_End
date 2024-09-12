import { render, screen, fireEvent } from '@testing-library/react';
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

test('error if selected day in the past', () => {
  const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
  const mockDispatch = jest.fn();
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  const dateInput = screen.getByLabelText('Choose a Date');
  const pastDate = '2000-01-01';

  fireEvent.change(dateInput, { target: { value: pastDate } });

  expect(screen.getByText('Selected Date cannot be in the past')).toBeInTheDocument();
  expect(dateInput.value).toBe('');  // Ensure the date is cleared
});

test('no error if correct day', () => {
  const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
  const mockDispatch = jest.fn();
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  const dateInput = screen.getByLabelText('Choose a Date');
  const futureDate = '2200-01-01';

  fireEvent.change(dateInput, { target: { value: futureDate } });

  expect(screen.queryByText('Selected Date cannot be in the past')).not.toBeInTheDocument();
  expect(dateInput.value).toBe(futureDate);
});

test('submit button disabled if no date selected', () => {
  const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
  const mockDispatch = jest.fn();
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  const submitButton = screen.getByRole('button', { name: "Make your Reservation" });
  const dateInput = screen.getByLabelText('Choose a Date');
  const timeSelect = screen.getByLabelText('Choose a Time');

  /* Initially submit button disabled since nothing selected */
  expect(submitButton).toBeDisabled();

  fireEvent.change(dateInput, { target: { value: '2100-01-01' } });
  fireEvent.change(timeSelect, { target: { value: mockAvailableTimes[0] } });

  expect(submitButton).toBeEnabled();
});

test('submit correct data in form', () => {
  const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>);

  const dateInput = screen.getByLabelText('Choose a Date');
  const timeSelect = screen.getByLabelText('Choose a Time');
  const guestInput = screen.getByLabelText('Number of Guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByRole('button', { name: "Make your Reservation" });

  fireEvent.change(dateInput, { target: { value: '2100-01-01' } });
  fireEvent.change(timeSelect, { target: { value: mockAvailableTimes[0] } });
  fireEvent.change(guestInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2100-01-01',
      time: mockAvailableTimes[0],
      occasion: 'Birthday',
      guests: '3',
  });
});