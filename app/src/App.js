import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import BookingPage from  './components/BookingPage'
import Footer from  './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useReducer }  from 'react'

function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]
}

function updateTimes(state, action) {
  if (action.payload.date === '2024-09-10') {
    /* console.log('updated'); */
    return ['14:00', '17:00'];
  } else{
    return initializeTimes();
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

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
