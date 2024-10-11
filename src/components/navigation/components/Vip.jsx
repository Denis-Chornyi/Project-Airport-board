import React from 'react';
import imgVip from '../../../../public/images/image-nav/vip.jpg';
import ModalContent from '../common/ModalContent';

const Vip = ({ isVisible }) => {
  const terminalBLinks = [
    { name: 'VIP service', href: '#' },
    { name: 'Transfer', href: '#' },
    { name: 'Hotel IEV', href: '#' },
    { name: 'Private flight', href: '#' }
  ];

  const faresAndRulesLinks = [
    { name: 'Art Gallery', href: '#' },
    { name: 'Virtual tour', href: '#' },
    { name: 'Terminal B contacts', href: '#' }
  ];

  const links = [
    { category: 'Terminal B', items: terminalBLinks },
    { category: 'Fares & Rules', items: faresAndRulesLinks }
  ];

  return (
    <ModalContent
      isVisible={isVisible}
      image={imgVip}
      title="Terminal B"
      text="Speed, comfort, confidentiality."
      links={links}
    />
  );
};

export default Vip;
