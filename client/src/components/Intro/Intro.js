import React from 'react';
import Logo from '../../images/logo.png';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro-wrapper'>
      <div className='intro-picture'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='intro-message'>
        <h2>Hey 👋</h2>
        <h3>My name is Crystal and I'm a Software Engineer.</h3>
        <h3>
          This is my digital garden, where I write about the things I'm working on and share what
          I've learned.
        </h3>
      </div>
    </div>
  );
};

export default Intro;
