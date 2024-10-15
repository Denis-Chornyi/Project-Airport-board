import React, { useState } from 'react';
import ModalContent from './components/ModalContent';
import imgPlane from '../../../public/images/image-nav/plane.jpg';
import imgHotel from '../../../public/images/image-nav/Hotels.jpg';
import imgVip from '../../../public/images/image-nav/vip.jpg';
import './navigation.scss';
import { navItems } from './data';

const Navigation = () => {
  const [visibleItem, setVisibleItem] = useState('');
  const [activeItem, setActiveItem] = useState('');

  const handleToggle = item => {
    setVisibleItem(visibleItem === item ? '' : item);
    setActiveItem(visibleItem === item ? '' : item);
  };

  const modalData = {
    ForPassengers: {
      image: imgPlane,
      title: 'Airline tickets',
      text: 'Purchase tickets online',
      links: [
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
      ]
    },
    Services: {
      image: imgHotel,
      title: 'Hotels worldwide',
      text: 'Book hotels all over the world at best prices',
      links: [
        {
          category: 'All services',
          items: [
            { name: 'COVID-19 testing', href: '#' },
            { name: 'Priority line', href: '#' },
            { name: 'Express Line', href: '#' },
            { name: 'Business lounge', href: '#' },
            { name: 'VIP service', href: '#' },
            { name: 'Hotel IEV', href: '#' },
            { name: 'Transfer', href: '#' },
            { name: 'Baggage wrapping', href: '#' },
            { name: 'Long-term parking', href: '#' }
          ]
        },
        {
          category: 'Transfer',
          items: [
            { name: 'Airline tickets', href: '#' },
            { name: 'Hotels worldwide', href: '#' },
            { name: 'Car rental', href: '#' }
          ]
        }
      ]
    },
    VIP: {
      image: imgVip,
      title: 'Terminal B',
      text: 'Speed, comfort, confidentiality.',
      links: [
        {
          category: 'Terminal B',
          items: [
            { name: 'VIP service', href: '#' },
            { name: 'Transfer', href: '#' },
            { name: 'Hotel IEV', href: '#' },
            { name: 'Private flight', href: '#' }
          ]
        },
        {
          category: 'Fares & Rules',
          items: [
            { name: 'Art Gallery', href: '#' },
            { name: 'Virtual tour', href: '#' },
            { name: 'Terminal B contacts', href: '#' }
          ]
        }
      ]
    },
    Corporate: {
      image: imgPlane,
      title: 'Corporate services',
      text: 'Ground handling, education, careers',
      links: [
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
      ]
    },
    PressRoom: {
      image: imgPlane,
      title: 'Press Room',
      text: 'News and media information',
      links: [
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
      ]
    }
  };

  return (
    <nav className="header__navigation">
      <ul className="header__list">
        {navItems.map(item => (
          <li
            key={item.key}
            className={`header__list-item ${
              activeItem === item.key ? 'header__list-item_active' : ''
            }`}
          >
            <a className="header__link" onClick={() => handleToggle(item.key)}>
              {item.title}
            </a>
            {visibleItem === item.key && (
              <ModalContent
                isVisible={visibleItem === item.key}
                image={modalData[item.key].image}
                title={modalData[item.key].title}
                text={modalData[item.key].text}
                links={modalData[item.key].links}
              />
            )}
          </li>
        ))}
        <li className="header__list-item">
          <a className="header__link" href="./">
            EN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
