import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
// Logo importazione rimossa

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-logo-section">
            {/* Sostituito img con div */}
            <div className="footer-logo">Wrapping Italy</div>
            <p>Leader italiano nel wrapping professionale con oltre 10 anni di esperienza nella personalizzazione di veicoli e oggetti.</p>
            <div className="social-links">
              <a href="https://facebook.com/wrappingitaly" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/wrappingitaly" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/wrappingitaly" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/wrappingitaly" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div className="footer-links-section">
            <div className="footer-links-column">
              <h3>Servizi</h3>
              <ul>
                <li><Link to="/auto">Wrapping Auto</Link></li>
                <li><Link to="/moto">Wrapping Moto</Link></li>
                <li><Link to="/nautico">Wrapping Nautico</Link></li>
                <li><Link to="/design">Wrapping Design</Link></li>
                <li><Link to="/snowboard">Wrapping Snowboard</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Info Utili</h3>
              <ul>
                <li><Link to="/">Cos'è il Wrapping</Link></li>
                <li><Link to="/garanzie-condizioni">Garanzie e Condizioni</Link></li>
                <li><Link to="/contatti">Contattaci</Link></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/cookie-policy">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-contact-section">
              <h3>Contatti</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <p>Via Concordia 9, 20090 Assago MI, Italy</p>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <p><a href="mailto:info@wrappingitaly.it">info@wrappingitaly.it</a></p>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <p><a href="tel:+39024881859">+39 02 4881859</a></p>
                </div>
                <div className="contact-item">
                  <FaWhatsapp />
                  <p><a href="https://wa.me/393519173008">+39 351 917 3008</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Wrapping Italy S.r.l. - P.IVA: 09414230962 - Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;