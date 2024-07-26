import React from 'react';
import logo from '../image/logo.png';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-img" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
