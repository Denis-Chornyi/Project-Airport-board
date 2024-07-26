import React from 'react';
import facebookIcon from '../image/image-footer/facebook.svg';
import instagramIcon from '../image/image-footer/instagram.svg';
import xIcon from '../image/image-footer/twitter.svg';
import youtubeIcon from '../image/image-footer/youtube.svg';
import linkedinIcon from '../image/image-footer/linkedin.svg';
import spmlLogo from '../image/image-footer/smpl-logo.webp';
import ufutureLogo from '../image/image-footer/ufuture.png';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer__navigation">
          <ul className="footer__links">
            <li className="footer__link">For passengers</li>
            <li className="footer__link">
              <a href="./">Flight schedule</a>
            </li>
            <li className="footer__link">
              <a href="./">Services</a>
            </li>
            <li className="footer__link">
              <a href="./">Contacts</a>
            </li>
            <li className="footer__link">
              <a href="./">Privacy policy</a>
            </li>
            <li className="footer__link">
              <a href="./">Feedback form</a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__link">Corporate</li>
            <li className="footer__link">
              <a href="./">Main page</a>
            </li>
            <li className="footer__link">
              <a href="./">Ground Handling</a>
            </li>
            <li className="footer__link">
              <a href="./">Airport characteristics</a>
            </li>
            <li className="footer__link">
              <a href="./">Education Center</a>
            </li>
            <li className="footer__link">
              <a href="./">Careers</a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__link">Press centre</li>
            <li className="footer__link">
              <a href="./">Main page</a>
            </li>
            <li className="footer__link">
              <a href="./">Latest news</a>
            </li>
            <li className="footer__link">
              <a href="./">Social & Art Projects</a>
            </li>
            <li className="footer__link">
              <a href="./">Financial reports</a>
            </li>
            <li className="footer__link">
              <a href="./">Traffic statistics</a>
            </li>
          </ul>

          <div className="footer__contact-and-follow">
            <h6>Contact us:</h6>
            <span>+38 (044) 500 49 73</span>
            <h6>Follow us:</h6>
            <a href="https://www.facebook.com/KyivAirport">
              <img src={facebookIcon} alt="FaceBook" />
            </a>
            <a href="https://twitter.com/KyivAirport">
              <img src={xIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/kyivairport/">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UC-YNjGc3PCb60YCf82-qi_Q/feed">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/company/airportkyiv/">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
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
                  {' '}
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
