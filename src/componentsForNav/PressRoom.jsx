import React from 'react';
import './componentsForNav.scss';
import imgPlane from '../image/image-nav/plane.jpg';

const PressRoom = ({ isVisible }) => {
  const styleContainer = isVisible
    ? {
        opacity: 1,
        transform: 'translateY(0)',
        visibility: 'visible',
        transition: 'visibility .3s, transform .3s, opacity .3s'
      }
    : {
        opacity: 0,
        transform: 'translateY(-100%)',
        visibility: 'hidden',
        transition: 'visibility .3s, transform .3s, opacity .3s'
      };

  const styleModal = isVisible ? { pointerEvents: 'all' } : { pointerEvents: 'none' };

  return (
    <div className="header-modal" style={styleModal}>
      <div className="header-modal__container" style={styleContainer}>
        <div className="header-modal__block">
          <nav>
            <img src={imgPlane} alt="plane" className="header-modal__block-img" />
            <h4 className="header-modal__block-title">Airline tickets</h4>
            <p className="header-modal__block-text">Purchase tickets online</p>
            <a className="header-modal__block-link">Search</a>
          </nav>
        </div>
        <div className="header-modal__links">
          <div>
            <p>Press Room</p>
            <a>Press Room main page</a>
            <a>Newsroom</a>
            <a>Social & Art Projects</a>
            <a>Traffic statistics</a>
            <a>Financial reports</a>
            <a>Media contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRoom;
