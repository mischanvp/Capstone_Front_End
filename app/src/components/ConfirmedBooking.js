import '../style.css';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
    return (
    <>
        <div className="confirmed-booking">
            <h2>Booking Confirmed!</h2>
            <p>Your reservation has been successfully confirmed.</p>
            <p>Thank you for booking with us!</p>
            <Link to="/">Back to Home</Link>
        </div>
    </>
    );
}

export default ConfirmedBooking;