import './App.css';
import Header from  './components/Header'
import Main from  './components/Main'
import Footer from  './components/Footer'

function App() {
  return (
    <div className="site-container">
      {/* Header and navigation section */}
      <Header />
      {/* Main section */}
      <Main />
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
