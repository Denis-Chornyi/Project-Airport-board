import React from 'react';
import spmlLogo from '../../../public/images/image-footer/smpl-logo.webp';
import ufutureLogo from '../../../public/images/image-footer/ufuture.png';
import './footer.scss';
import { corporateLinks, passengerLinks, pressCentreLinks, socialLinks } from './data';

const Footer = () => {
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
