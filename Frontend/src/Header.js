import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../src/styling/header.css";
import Logo from '../src/images/hanuman.jpg';

function Header({ onLinkClick = () => {} }) { 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        closeDropdowns();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      } else {
        dropdownRef.current.style.maxHeight = '0';
      }
    }
  }, [isDropdownOpen]);

  return (
    <div className="navbar">
      <Link to="/" onClick={onLinkClick}>
        <img src={Logo} alt="Logo" height="65px" className="Denali-Logo" />
      </Link>
      <div className="link-container">
        <Link
          to="/"
          id="link1"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          Home
        </Link>
        <Link
          to="/About"
          id="link3"
          className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          About Ashwin Pathak
        </Link>
        <Link
          to="/Contact"
          id="link5"
          className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          LLM
        </Link>
      </div>
      <div
        className={`menu-icon ${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div ref={dropdownRef} className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          About Ashwin Pathak
        </Link>
        <Link
          to="/Contact"
          className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          History
        </Link>
      </div>
    </div>
  );
}

export default Header;
