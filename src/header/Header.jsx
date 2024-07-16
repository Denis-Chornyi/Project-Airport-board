import React from 'react';
import './header.scss';
import logo from '../image/logo.png';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <a href="./" className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-img" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
