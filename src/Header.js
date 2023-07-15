import React from 'react';
import './styles/Header.css';
import Button from './components/button.js';

const Header = () => {
  return (
    <header className="header">
      <a>My</a>
      {Button()} {}
    </header>
  );
};

export default Header;