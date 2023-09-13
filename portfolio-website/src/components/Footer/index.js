import React from 'react';
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <p>Contact: your.email@example.com</p>
      </footer>
    );
  }

export default Footer;
