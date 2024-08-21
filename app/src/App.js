import './App.css';
import Header from  './components/Header'
import Nav from  './components/Nav'
import Main from  './components/Main'
import Footer from  './components/Footer'

function App() {
  return (
    <div className="site-container">
      <header className="nav-header">
        {/* Header section */}
        <Header />
        {/* Navigation section */}
        <Nav />
      </header>
      {/* Main section */}
      <Main />
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
