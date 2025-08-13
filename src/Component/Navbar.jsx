import React, { useState } from 'react';
import './Navbar.css';
import Logo from './logo.jpeg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
          <span>Yatra Maharashtrachi</span>
        </div>

        <ul className="navbar-links">
          <li onClick={() => handleNavClick("home")}>Home</li>
          <li onClick={() => handleNavClick("about")}>About us</li>
          <li onClick={() => handleNavClick("help")}>Help</li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => handleNavClick("home")}>Home</li>
          <li onClick={() => handleNavClick("about")}>About us</li>
          <li onClick={() => handleNavClick("help")}>Help</li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;