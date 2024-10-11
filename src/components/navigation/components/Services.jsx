import React from 'react';
import imgHotel from '../../../../public/images/image-nav/Hotels.jpg';
import ModalContent from '../common/ModalContent';

const Services = ({ isVisible }) => {
  const allServices = [
    { name: 'COVID-19 testing', href: '#' },
    { name: 'Priority line', href: '#' },
    { name: 'Express Line', href: '#' },
    { name: 'Business lounge', href: '#' },
    { name: 'VIP service', href: '#' },
    { name: 'Hotel IEV', href: '#' },
    { name: 'Transfer', href: '#' },
    { name: 'Baggage wrapping', href: '#' },
    { name: 'Long-term parking', href: '#' }
  ];

  const transfer = [
    { name: 'Airline tickets', href: '#' },
    { name: 'Hotels worldwide', href: '#' },
    { name: 'Car rental', href: '#' }
  ];

  const links = [
    { category: 'All services', items: allServices },
    { category: 'Transfer', items: transfer }
  ];

  return (
    <ModalContent
      isVisible={isVisible}
      image={imgHotel}
      title="Hotels worldwide"
      text="Book hotels all over the world at best prices"
      links={links}
    />
  );
};

export default Services;
