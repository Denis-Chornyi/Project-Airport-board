import React from 'react';
import './componentsForNav.scss';
import imgPlane from '../image/image-nav/Hotels.jpg';
import { getModalStyles } from './utilsModalStyles';

const Services = ({ isVisible }) => {
  const { container: styleContainer, modal: styleModal } = getModalStyles(isVisible);

  return (
    <div className="header-modal" style={styleModal}>
      <div className="header-modal__container" style={styleContainer}>
        <div className="header-modal__block">
          <nav>
            <img src={imgPlane} alt="plane" className="header-modal__block-img" />
            <h4 className="header-modal__block-title">Hotels worldwide</h4>
            <p className="header-modal__block-text">
              Book hotels all over the world at best prices
            </p>
            <a className="header-modal__block-link">VIEW</a>
          </nav>
        </div>
        <div className="header-modal__links">
          <div>
            <p>All services</p>
            <a>COVID-19 testing</a>
            <a>Priority line</a>
            <a>Express Line</a>
            <a>Business lounge</a>
            <a>VIP service</a>
            <a>Hotel IEV</a>
            <a>Transfer</a>
            <a>Baggage wrapping</a>
            <a>Long-term parking</a>
          </div>
          <div>
            <p>Transfer</p>
            <a>Airline tickets</a>
            <a>Hotels worldwide</a>
            <a>Сar rental</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
