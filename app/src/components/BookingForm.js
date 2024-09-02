import { useState } from 'react';
import '../style.css';
import '../style_booking.css';

function BookingForm({ availableTimes, dispatch }) {

    const [bookDate, setBookDate] = useState("")
    const [bookTime, setBookTime] = useState("")
    const [bookOccasion, setBookOccasion] = useState("")
    const [bookNGuests, setBookNGuests] = useState("1")

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setBookDate(selectedDate);
        dispatch({ type: 'update_time', payload: { date: selectedDate } });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); /* Prevent default behaviour of reloading page after submitting */
        setBookDate(''); /* Setting to empty after submitting */
        setBookTime(availableTimes[0]); /* Setting to default after submitting */
        setBookOccasion('Date'); /* Setting to default after submitting */
        setBookNGuests('1'); /* Setting to default after submitting */
        /* console.log("joe we did it!"); */
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
                <label htmlFor="res-time">Choose a Time</label>
                <select
                    id="res-time"
                    value={bookTime}
                    onChange = {(e) => setBookTime(e.target.value)}
                >
                    {availableTimes.map((time, index) => (
                        <option key={index}>
                            {time}
                        </option>
                    ))}
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
                    disabled={!bookDate}
                    type="submit"
                    value="Make your Reservation"
                />
            </form>
        </div>
    );
}

export default BookingForm;
