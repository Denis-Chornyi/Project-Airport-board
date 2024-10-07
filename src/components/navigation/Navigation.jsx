import React, { useState } from 'react';
import ForPassengers from './components/ForPassengers';
import Services from './components/Services';
import Vip from './components/Vip';
import Corporate from './components/Corporate';
import PressRoom from './components/PressRoom';
import './navigation.scss';

const Navigation = () => {
  const [visibleItem, setVisibleItem] = useState('');
  const [activeItem, setActiveItem] = useState('');

  const handleToggle = item => {
    setVisibleItem(visibleItem === item ? '' : item);
    setActiveItem(visibleItem === item ? '' : item);
  };

  return (
    <nav className="header__navigation">
      <ul className="header__list">
        <li
          className={`header__list-item ${
            activeItem === 'ForPassengers' ? 'header__list-item_active' : ''
          }`}
        >
          <a className="header__link" onClick={() => handleToggle('ForPassengers')}>
            For passengers
          </a>
          <ForPassengers isVisible={visibleItem === 'ForPassengers'} />
        </li>
        <li
          className={`header__list-item ${
            activeItem === 'Services' ? 'header__list-item_active' : ''
          }`}
        >
          <a className="header__link" onClick={() => handleToggle('Services')}>
            IEV Services
          </a>
          <Services isVisible={visibleItem === 'Services'} />
        </li>
        <li
          className={`header__list-item ${activeItem === 'VIP' ? 'header__list-item_active' : ''}`}
        >
          <a className="header__link" onClick={() => handleToggle('VIP')}>
            VIP
          </a>
          <Vip isVisible={visibleItem === 'VIP'} />
        </li>
        <li
          className={`header__list-item ${
            activeItem === 'Corporate' ? 'header__list-item_active' : ''
          }`}
        >
          <a className="header__link" onClick={() => handleToggle('Corporate')}>
            Corporate
          </a>
          <Corporate isVisible={visibleItem === 'Corporate'} />
        </li>
        <li
          className={`header__list-item ${
            activeItem === 'PressRoom' ? 'header__list-item_active' : ''
          }`}
        >
          <a className="header__link" onClick={() => handleToggle('PressRoom')}>
            Press Room
          </a>
          <PressRoom isVisible={visibleItem === 'PressRoom'} />
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
