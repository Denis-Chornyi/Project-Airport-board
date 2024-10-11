import React from 'react';
import facebookIcon from '../../../public/images/image-footer/facebook.svg';
import instagramIcon from '../../../public/images/image-footer/instagram.svg';
import xIcon from '../../../public/images/image-footer/twitter.svg';
import youtubeIcon from '../../../public/images/image-footer/youtube.svg';
import linkedinIcon from '../../../public/images/image-footer/linkedin.svg';
import spmlLogo from '../../../public/images/image-footer/smpl-logo.webp';
import ufutureLogo from '../../../public/images/image-footer/ufuture.png';
import './footer.scss';

const Footer = () => {
  const passengerLinks = [
    { name: 'Flight schedule', href: './' },
    { name: 'Services', href: './' },
    { name: 'Contacts', href: './' },
    { name: 'Privacy policy', href: './' },
    { name: 'Feedback form', href: './' }
  ];

  const corporateLinks = [
    { name: 'Main page', href: './' },
    { name: 'Ground Handling', href: './' },
    { name: 'Airport characteristics', href: './' },
    { name: 'Education Center', href: './' },
    { name: 'Careers', href: './' }
  ];

  const pressCentreLinks = [
    { name: 'Main page', href: './' },
    { name: 'Latest news', href: './' },
    { name: 'Social & Art Projects', href: './' },
    { name: 'Financial reports', href: './' },
    { name: 'Traffic statistics', href: './' }
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/KyivAirport', icon: facebookIcon, alt: 'FaceBook' },
    { href: 'https://twitter.com/KyivAirport', icon: xIcon, alt: 'Twitter' },
    { href: 'https://www.instagram.com/kyivairport/', icon: instagramIcon, alt: 'Instagram' },
    {
      href: 'https://www.youtube.com/channel/UC-YNjGc3PCb60YCf82-qi_Q/feed',
      icon: youtubeIcon,
      alt: 'YouTube'
    },
    { href: 'https://www.linkedin.com/company/airportkyiv/', icon: linkedinIcon, alt: 'LinkedIn' }
  ];

  const renderLinks = links =>
    links.map(link => (
      <li className="footer__link" key={link.name}>
        <a href={link.href}>{link.name}</a>
      </li>
    ));

  const renderSocialLinks = links =>
    links.map(({ href, icon, alt }) => (
      <a key={alt} href={href}>
        <img src={icon} alt={alt} />
      </a>
    ));

  return (
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer__navigation">
          <ul className="footer__links">
            <li className="footer__link">For passengers</li>
            {renderLinks(passengerLinks)}
          </ul>
          <ul className="footer__links">
            <li className="footer__link">Corporate</li>
            {renderLinks(corporateLinks)}
          </ul>
          <ul className="footer__links">
            <li className="footer__link">Press centre</li>
            {renderLinks(pressCentreLinks)}
          </ul>

          <div className="footer__contact-and-follow">
            <h6>Contact us:</h6>
            <span>+38 (044) 500 49 73</span>
            <h6>Follow us:</h6>
            {renderSocialLinks(socialLinks)}
          </div>
        </nav>
        <div className="footer__extra-info-block">
          <div className="footer__middle-logo-wrapper">
            <div className="footer__small-logo-wrapper">
              <span>
                © 2011-2021
                <br />
                «Kyiv» International Airport
              </span>
            </div>
            <div className="footer__small-logo-wrapper">
              <a href="https://ufuture.com/uk/">
                Part of
                <b>
                  Ufuture
                  <br />
                  Investment Group
                </b>
                <img src={ufutureLogo} alt="uFuture logo" />
              </a>
            </div>
          </div>
          <div className="footer__small-logo-wrapper footer__small-logo-wrapper_last">
            <a href="https://ufuture.com/uk/">
              Developed by
              <br />
              <img src={spmlLogo} alt="smpl logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
