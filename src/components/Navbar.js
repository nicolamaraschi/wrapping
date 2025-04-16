import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Wrapping</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">COS’E’ IL WRAPPING?</Link>
        <Link to="/auto">WRAPPING AUTO</Link>
        <Link to="/moto">WRAPPING MOTO</Link>
        <Link to="/nautico">WRAPPING NAUTICO</Link>
        <Link to="/design">WRAPPING DESIGN</Link>
        <Link to="/snowboard">WRAPPING SNOWBOARD</Link>
        <Link to="/garanzie-condizioni">Garanzie e Condizioni</Link>
        <Link to="/contatti">CONTATTI</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
      </div>
    </nav>
  );
};

export default Navbar;
