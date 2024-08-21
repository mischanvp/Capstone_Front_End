import React from 'react'
import '../style.css'
import Logo from '../pics/Logo.svg'

function Footer() {
    return (
        <footer className="footer">
          <img src={Logo} alt="Little Lemon Logo" className="pic-logo-footer" />
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul class='footer-nav-list'>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Menu">Menu</a></li>
              <li><a href="#Reservations">Reservations</a></li>
              <li><a href="#OrderOnline">Order Online</a></li>
              <li><a href="#Login">Login</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul class='footer-nav-list'>
              <li>Adress</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social Media</h4>
            <ul class='footer-nav-list'>
              <li>Adress</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
      </footer>
        )
}

export default Footer