import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Wrapping Italy S.r.l.</h2>
          <p>Via Concordia 9, 20090 Assago MI, Italy</p>
          <p>Email: <a href="mailto:info@wrappingitaly.it">info@wrappingitaly.it</a></p>
          <p>Phone: <a href="tel:+39024881859">+39 02 4881859</a></p>
          <p>WhatsApp: <a href="https://wa.me/393519173008">+39 351 917 3008</a></p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/wrapping-auto">Wrapping Auto</a></li>
            <li><a href="/wrapping-moto">Wrapping Moto</a></li>
            <li><a href="/wrapping-snowboard">Wrapping Snowboard</a></li>
            <li><a href="/garanzie-condizioni">Garanzie e Condizioni</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wrapping Italy S.r.l. - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
