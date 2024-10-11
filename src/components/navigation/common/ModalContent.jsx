import React from 'react';
import PropTypes from 'prop-types';
import { getModalStyles } from '../../../common/utilsModalStyles';
import './index.scss';

const ModalContent = ({ isVisible, image, title, text, links }) => {
  const { container: styleContainer, modal: styleModal } = getModalStyles(isVisible);

  return (
    <div className="header-modal" style={styleModal}>
      <div className="header-modal__container" style={styleContainer}>
        <div className="header-modal__block">
          <nav>
            <img src={image} alt={title} className="header-modal__block-img" />
            <h4 className="header-modal__block-title">{title}</h4>
            <p className="header-modal__block-text">{text}</p>
            <a className="header-modal__block-link">Search</a>
          </nav>
        </div>
        <div className="header-modal__links">
          {links.map(({ category, items }) => (
            <div key={category}>
              <p>{category}</p>
              <ul>
                {items.map(({ name, href }) => (
                  <li key={name}>
                    <a href={href}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default ModalContent;
