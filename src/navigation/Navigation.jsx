import React from 'react';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav className="header__navigation">
      <ul className="header__list">
        <li className="header__list-item">
          <a className="header__link" href="./">
            For passengers
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="./">
            IEV Services
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="./">
            VIP
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="./">
            Corporate
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="./">
            Press Room
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__link" href="./">
            EN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
