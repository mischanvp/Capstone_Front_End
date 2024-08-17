import React from 'react'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Lemon St, Flavor Town, CA 90210</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media-list">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </footer>
        )
}

export default Footer