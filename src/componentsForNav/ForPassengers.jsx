import React from 'react';
import imgPlane from '../image/image-nav/plane.jpg';
import PropTypes from 'prop-types';
import { getModalStyles } from './utilsModalStyles';
import './componentsForNav.scss';


const ForPassengers = ({ isVisible }) => {
  const { container: styleContainer, modal: styleModal } = getModalStyles(isVisible);

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
            <p>Information</p>
            <a>COVID-19</a>
            <a>Before flight</a>
            <a>Aviation security</a>
            <a>Customs control</a>
            <a>Border control</a>
            <a>For passengers with disabilities</a>
            <a>Traveling with animals</a>
            <a>Airport map</a>
            <a>Feedback form</a>
            <a>Contacts</a>
          </div>
          <div>
            <p>General</p>
            <a>On-line schedule</a>
            <a>Airport Directions</a>
            <a>Parking</a>
            <a>Baggage</a>
            <a>Relaxation room</a>
            <a>Airlines</a>
            <a>Shop & dine</a>
            <a>Mastercard Fast Line</a>
            <a>Feedback form</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPassengers;

ForPassengers.propTypes = {
  isVisible: PropTypes.bool.isRequired
};
