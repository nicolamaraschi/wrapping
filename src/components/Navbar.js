// src/components/Navbar.js
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Wrapping Italy Logo" style={{ height: '40px', marginRight: '10px' }} />
          Wrapping Italy
        </Link>
        
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
              Cos'è il Wrapping
            </Link>
            <Link to="/auto" className={location.pathname === '/auto' ? 'active' : ''} onClick={closeMenu}>
              Auto
            </Link>
            <Link to="/moto" className={location.pathname === '/moto' ? 'active' : ''} onClick={closeMenu}>
              Moto
            </Link>
            <Link to="/nautico" className={location.pathname === '/nautico' ? 'active' : ''} onClick={closeMenu}>
              Nautico
            </Link>
            <Link to="/design" className={location.pathname === '/design' ? 'active' : ''} onClick={closeMenu}>
              Design
            </Link>
            <Link to="/snowboard" className={location.pathname === '/snowboard' ? 'active' : ''} onClick={closeMenu}>
              Snowboard
            </Link>
            <Link to="/garanzie-condizioni" className={location.pathname === '/garanzie-condizioni' ? 'active' : ''} onClick={closeMenu}>
              Garanzie
            </Link>
          </div>
          
          <Link to="/contatti" className="nav-contact-btn" onClick={closeMenu}>
            Contattaci
          </Link>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;