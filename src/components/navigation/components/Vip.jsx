import React from 'react';
import imgPlane from '../../../../public/images/image-nav/vip.jpg';
import { getModalStyles } from '../../../common/utilsModalStyles';
import './componentsForNav.scss';

const Vip = ({ isVisible }) => {
  const { container: styleContainer, modal: styleModal } = getModalStyles(isVisible);

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
