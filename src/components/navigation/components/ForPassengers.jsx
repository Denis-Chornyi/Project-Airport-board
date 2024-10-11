import React from 'react';
import imgPlane from '../../../../public/images/image-nav/plane.jpg';
import ModalContent from '../common/ModalContent';

const ForPassengers = ({ isVisible }) => {
  const links = [
    {
      category: 'Information',
      items: [
        { name: 'COVID-19', href: '#' },
        { name: 'Before flight', href: '#' },
        { name: 'Aviation security', href: '#' },
        { name: 'Customs control', href: '#' },
        { name: 'Border control', href: '#' },
        { name: 'For passengers with disabilities', href: '#' },
        { name: 'Traveling with animals', href: '#' },
        { name: 'Airport map', href: '#' },
        { name: 'Feedback form', href: '#' },
        { name: 'Contacts', href: '#' }
      ]
    },
    {
      category: 'General',
      items: [
        { name: 'On-line schedule', href: '#' },
        { name: 'Airport Directions', href: '#' },
        { name: 'Parking', href: '#' },
        { name: 'Baggage', href: '#' },
        { name: 'Relaxation room', href: '#' },
        { name: 'Airlines', href: '#' },
        { name: 'Shop & dine', href: '#' },
        { name: 'Mastercard Fast Line', href: '#' },
        { name: 'Feedback form', href: '#' }
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

export default ForPassengers;
