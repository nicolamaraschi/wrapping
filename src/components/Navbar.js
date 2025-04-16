// Navbar.js completamente rinnovato
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Wrapping Italy
        </Link>
        
        <div className="nav-menu-wrapper">
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Cos'è il Wrapping
            </Link>
            <Link to="/auto" className={location.pathname === '/auto' ? 'active' : ''}>
              Auto
            </Link>
            <Link to="/moto" className={location.pathname === '/moto' ? 'active' : ''}>
              Moto
            </Link>
            <Link to="/nautico" className={location.pathname === '/nautico' ? 'active' : ''}>
              Nautico
            </Link>
            <Link to="/design" className={location.pathname === '/design' ? 'active' : ''}>
              Design
            </Link>
            <Link to="/snowboard" className={location.pathname === '/snowboard' ? 'active' : ''}>
              Snowboard
            </Link>
            <Link to="/garanzie-condizioni" className={location.pathname === '/garanzie-condizioni' ? 'active' : ''}>
              Garanzie
            </Link>
          </div>
          
          <Link to="/contatti" className="nav-contact-btn">
            Contattaci
          </Link>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;