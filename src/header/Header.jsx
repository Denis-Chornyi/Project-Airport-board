import React from 'react';
import './header.scss';
import logo from '../image/logo.png';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import ForPassengers from '../componentsForNav/ForPassengers';

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
