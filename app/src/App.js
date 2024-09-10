import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import BookingPage from  './components/BookingPage'
import Footer from  './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useReducer, useEffect }  from 'react'
import { fetchAPI } from './components/Api';

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

  useEffect(() => {
    const loadInitialTimes = async () => {
      dispatch({ type: 'update_time', payload: { date: new Date() } });
    };
    loadInitialTimes();
  }, []);

  return (
    <div className="site-container">
      <BrowserRouter>
        {/* Header and navigation section */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
        {/* Footer section */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
