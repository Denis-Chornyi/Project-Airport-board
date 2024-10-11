import React from 'react';
import imgPlane from '../../../../public/images/image-nav/plane.jpg';
import ModalContent from '../common/ModalContent';

const PressRoom = ({ isVisible }) => {
  const links = [
    {
      category: 'Press Room',
      items: [
        { name: 'Press Room main page', href: '#' },
        { name: 'Newsroom', href: '#' },
        { name: 'Social & Art Projects', href: '#' },
        { name: 'Traffic statistics', href: '#' },
        { name: 'Financial reports', href: '#' },
        { name: 'Media contact', href: '#' }
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

export default PressRoom;
