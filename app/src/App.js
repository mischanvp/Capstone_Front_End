import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import BookingPage from  './components/BookingPage'
import Footer from  './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="site-container">
      <BrowserRouter>
        {/* Header and navigation section */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        {/* Footer section */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
