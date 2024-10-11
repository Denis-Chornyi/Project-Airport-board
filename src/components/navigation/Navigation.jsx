import React, { useState } from 'react';
import PressRoom from './components/PressRoom';
import Services from './components/Services';
import Vip from './components/Vip';
import ForPassengers from './components/ForPassengers';
import Corporate from './components/Corporate';
import './navigation.scss';

const Navigation = () => {
  const [visibleItem, setVisibleItem] = useState('');
  const [activeItem, setActiveItem] = useState('');

  const handleToggle = item => {
    setVisibleItem(visibleItem === item ? '' : item);
    setActiveItem(visibleItem === item ? '' : item);
  };

  const navItems = [
    { key: 'ForPassengers', title: 'For passengers' },
    { key: 'Services', title: 'IEV Services' },
    { key: 'VIP', title: 'VIP' },
    { key: 'Corporate', title: 'Corporate' },
    { key: 'PressRoom', title: 'Press Room' }
  ];

  const componentsMap = {
    ForPassengers: ForPassengers,
    Services: Services,
    VIP: Vip,
    Corporate: Corporate,
    PressRoom: PressRoom
  };

  return (
    <nav className="header__navigation">
      <ul className="header__list">
        {navItems.map(item => {
          const Component = componentsMap[item.key];

          return (
            <li
              key={item.key}
              className={`header__list-item ${
                activeItem === item.key ? 'header__list-item_active' : ''
              }`}
            >
              <a className="header__link" onClick={() => handleToggle(item.key)}>
                {item.title}
              </a>
              {visibleItem === item.key && Component && <Component isVisible />}{' '}
            </li>
          );
        })}
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
