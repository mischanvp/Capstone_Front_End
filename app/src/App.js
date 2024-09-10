import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import BookingPage from  './components/BookingPage'
import ConfirmedBooking from  './components/ConfirmedBooking'
import Footer from  './components/Footer'
import {Routes, Route, useNavigate} from 'react-router-dom'
import React, { useReducer, useEffect }  from 'react'
import { fetchAPI, submitAPI } from './components/Api';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  if (action.type === 'update_time' && action.payload.date) {
    const date = new Date(action.payload.date);
    return fetchAPI(date);
  } else {
    return state;
  }
}


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  useEffect(() => {
    const loadInitialTimes = async () => {
      dispatch({ type: 'update_time', payload: { date: new Date() } });
    };
    loadInitialTimes();
  }, []);

  return (
    <div className="site-container">
      {/* Header and navigation section */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage
                                          availableTimes={availableTimes}
                                          dispatch={dispatch}
                                          submitForm={async (formData) => {
                                            const success = await submitAPI(formData);
                                            if (success) {
                                              navigate('/confirmed'); // Use navigate function to redirect
                                            } else {
                                              alert('Submission failed. Please try again.');
                                            }
                                          }}
                                            />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
