import { useState } from 'react';
import '../style.css';
import '../style_booking.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {

    const [bookDate, setBookDate] = useState("")
    const [bookTime, setBookTime] = useState("")
    const [bookOccasion, setBookOccasion] = useState("")
    const [bookNGuests, setBookNGuests] = useState("1")
    const [dateError, setDateError] = useState("")

    /* check that the selected date is not in the past; if it is return true */
    const handlePastDate = (e) => {
        const selectedDate = new Date(e);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate < today;
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        if (handlePastDate(selectedDate)){
            setDateError('Selected Date cannot be in the past')
            setBookDate('')
        } else {
            setDateError('')
            setBookDate(selectedDate);
            dispatch({ type: 'update_time', payload: { date: selectedDate } });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            date: bookDate,
            time: bookTime,
            occasion: bookOccasion,
            guests: bookNGuests
        };
        await submitForm(formData);
    };

    return (
        <div className='booking-container'>
            <form className='booking-form' onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose a Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={bookDate}
                    onChange = {handleDateChange}
                />
                {dateError && <p className="error">{dateError}</p>}
                <label htmlFor="res-time">Choose a Time</label>
                <select
                    id="res-time"
                    value={bookTime}
                    onChange = {(e) => setBookTime(e.target.value)}
                >
                    {availableTimes.length > 0 ? (
                        availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                            </option>
                            ))
                        ) : (
                        <option>No available times</option>
                        )}
                </select>
                <label htmlFor="guests">Number of Guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={bookNGuests}
                    onChange = {(e) => setBookNGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={bookOccasion}
                    onChange = {(e) => setBookOccasion(e.target.value)}
                >
                    <option>Date</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input
                    disabled={!bookDate || !bookTime}
                    type="submit"
                    value="Make your Reservation"
                />
            </form>
        </div>
    );
}

export default BookingForm;
