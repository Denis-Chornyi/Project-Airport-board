import React from 'react';
import imgPlane from '../../../../public/images/image-nav/plane.jpg';
import ModalContent from '../common/ModalContent';

const Corporate = ({ isVisible }) => {
  const links = [
    {
      category: 'Corporate',
      items: [
        { name: 'Corporate page', href: '#' },
        { name: 'Ground handling', href: '#' },
        { name: 'Airport characteristics', href: '#' },
        { name: 'Education', href: '#' },
        { name: 'Cargo terminal', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Corporate contacts', href: '#' }
      ]
    }
  ];

  return (
    <ModalContent
      isVisible={isVisible}
      image={imgPlane}
      title="Airline tickets"
      text="Purchase tickets online"
      links={links}
    />
  );
};

export default Corporate;
