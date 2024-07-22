import React from 'react';
import './componentsForNav.scss';
import imgPlane from '../image/image-nav/vip.jpg';

const Vip = ({ isVisible }) => {
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
            <h4 className="header-modal__block-title">Terminal B</h4>
            <p className="header-modal__block-text">Speed, comfort, confidentiality.</p>
            <a className="header-modal__block-link">BOOK NOW</a>
          </nav>
        </div>
        <div className="header-modal__links">
          <div>
            <p>Terminal B</p>
            <a>VIP service</a>
            <a>Transfer</a>
            <a>Hotel IEV</a>
            <a>Private flight</a>
          </div>
          <div>
            <p>Fares & Rules</p>
            <a>Art Gallery</a>
            <a>Virtual tour</a>
            <a>Terminal B contacts</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip;
