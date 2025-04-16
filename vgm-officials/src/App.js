"use client"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X, Gamepad2, Youtube, Instagram, MessageSquare, Mail } from "lucide-react"
import Home from "./pages/Home"
import Roster from "./pages/Roster"
import YouTube from "./pages/YouTube"
import InstagramPage from "./pages/Instagram"
import Discord from "./pages/Discord"
import ContactUs from "./pages/ContactUs"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Router>
      <div className="app">
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <Link to="/" className="logo">
            <span className="logo-text">VGM</span>
            <span className="logo-highlight">OFFICIALS</span>
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon">🏠</span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/roster" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon">
                  <Gamepad2 size={16} />
                </span>
                <span>Roster</span>
              </Link>
            </li>
            <li>
              <Link to="/youtube" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon">
                  <Youtube size={16} />
                </span>
                <span>YouTube</span>
              </Link>
            </li>
            <li>
              <Link to="/instagram" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon">
                  <Instagram size={16} />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="/discord" onClick={() => setIsMenuOpen(false)}>
                <span className="nav-icon">
                  <MessageSquare size={16} />
                </span>
                <span>Discord</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="contact-btn">
                <span className="nav-icon">
                  <Mail size={16} />
                </span>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/instagram" element={<InstagramPage />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">VGM</span>
              <span className="logo-highlight">OFFICIALS</span>
              <p className="footer-tagline">Dominating the Battlefield</p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/roster">Our Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-socials">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="https://instagram.com/vgmofficials" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@vgmofficials" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
                <a href="https://discord.gg/vgmofficials" target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} VGM OFFICIALS. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
