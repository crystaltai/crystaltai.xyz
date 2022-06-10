import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLinks from './constants';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  // set the state of menu expanded to false
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenuState = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div className='header'>
      {/* Logo */}
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='Logo' id='logo' />
        </Link>
      </div>
      {/* Hamburger Menu */}
      <button id='hamburger' onClick={toggleMenuState}>
        <div id='hamburger-one'></div>
        <div id='hamburger-two'></div>
      </button>
      {/* Navigation Menu  */}
      <div className={`menu ${isMenuExpanded ? 'expanded' : ''}`}>
        <ul>
          {navLinks.map(({ icon, text, url }) => (
            <li className={`navLink ${icon ? 'social' : ''}`} key={text}>
              {icon ? (
                <a href={url} target='_blank' rel='noreferrer'>
                  <img src={icon} alt={text} className='social-icon' />
                </a>
              ) : (
                <Link to={url}>{text}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
