import React from 'react';
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sabin Budhathoki</p>
        <p>Contact: budhathokisabin303@gmail.com</p>
      </footer>
    );
  }

export default Footer;
