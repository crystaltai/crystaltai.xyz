import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import GithubLogo from '../../images/github.svg';
import LinkedinLogo from '../../images/linkedin.svg';
import TwitterLogo from '../../images/twitter.svg';
import './Header.css';

const Header = () => {
  // set the state of menu expanded to false
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenuState = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const checkMenuState = (isMenuExpanded) => {
    if (isMenuExpanded) {
      return 'menu expanded';
    } else {
      return 'menu';
    }
  };

  return (
    <div className='header'>
      {/* Logo */}
      <div className='logo'>
        <a href='/'>
          <img src={Logo} alt='Logo' id='logo' />
        </a>
      </div>
      {/* Hamburger Menu */}
      <button id='hamburger' onClick={toggleMenuState}>
        <div id='hamburger-one'></div>
        <div id='hamburger-two'></div>
      </button>
      {/* Navigation Menu  */}
      <div className={checkMenuState(isMenuExpanded)}>
        <ul>
          <li className='navLink'>
            <a href='/about'>About</a>
          </li>
          <li className='navLink'>
            <a href='/stack'>Stack</a>
          </li>
          <li className='navLink'>
            <a href='/repos'>Repos</a>
          </li>
          <li className='navLink'>
            <a href='/changelog'>Changelog</a>
          </li>
          <li className='social navLink'>
            <a href='https://github.com/crystaltai'>
              <img src={GithubLogo} alt='Github logo' id='github' />
            </a>
          </li>
          <li className='social navLink'>
            <a href='https://linkedin.com/in/crystaltai'>
              <img src={LinkedinLogo} alt='Linkedin logo' id='linkedin' />
            </a>
          </li>
          <li className='social navLink'>
            <a href='https://twitter.com/crystaltaixyz'>
              <img src={TwitterLogo} alt='Twitter logo' id='twitter' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
