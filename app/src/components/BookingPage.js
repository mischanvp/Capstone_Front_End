import '../style.css';
import BookingForm from  './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
}

export default BookingPage;
