import React from 'react';
import imgPlane from '../../images/image-nav/plane.jpg';
import { getModalStyles } from '../../common/utilsModalStyles';
import './componentsForNav.scss';

const PressRoom = ({ isVisible }) => {
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
