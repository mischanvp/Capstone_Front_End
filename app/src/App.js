import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import Reserve from  './components/Reserve'
import Footer from  './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="site-container">
      <BrowserRouter>
        {/* Header and navigation section */}
        <Header />
        {/* Footer section */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
