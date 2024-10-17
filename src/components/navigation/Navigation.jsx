import React, { useState } from 'react';
import ModalContent from './components/ModalContent';
import { navItems, modalData } from './data';
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
        {navItems.map(item => (
          <li
            key={item.key}
            className={`header__list-item ${
              activeItem === item.key ? 'header__list-item_active' : ''
            }`}
          >
            <a className="header__link" onClick={() => handleToggle(item.key)}>
              {item.title}
            </a>
            {visibleItem === item.key && (
              <ModalContent
                isVisible={visibleItem === item.key}
                image={modalData[item.key].image}
                title={modalData[item.key].title}
                text={modalData[item.key].text}
                links={modalData[item.key].links}
              />
            )}
          </li>
        ))}
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
