import React from 'react';

import logo from '../logo.svg';
import './Header.css'

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <h1 className="Header-title">LES BASES</h1>
    </header>
  )
}

export default Header;
