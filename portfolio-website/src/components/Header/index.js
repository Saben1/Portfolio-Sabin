import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Skills">Skills</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
