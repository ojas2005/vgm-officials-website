import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Roster from './pages/Roster';
import YouTube from './pages/YouTube';
import Instagram from './pages/Instagram';
import Discord from './pages/Discord';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    
    <Router>
      <div className="app">
      
        <nav className="navbar">
        <Link to="/" className="logo">
    VGM OFFICIALS
  </Link>
  <ul className="nav-links">
    {/* other links */}
  </ul>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/youtube">YouTube</Link></li>
            <li><Link to="/instagram">Instagram</Link></li>
            <li><Link to="/discord">Discord</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> {/* Corrected Link */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} VGM OFFICIALS. All rights reserved.</p>
          <div className="socials">
            <a href="https://instagram.com/vgmofficials" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/@vgmofficials" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://discord.gg/vgmofficials" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

// App.js or Layout.js
