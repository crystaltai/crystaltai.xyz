import React from 'react';
import Experience from '../../components/Experience/Experience';
import Intro from '../../components/Intro/Intro';
import './About.css';
import '../../App.css';

const About = () => {
  return (
    <div className='wrapper'>
      <Intro />
      <h1>Career</h1>
      <div className='career-wrapper'>
        <Experience entity={'EY'} role={'Software Engineer'} description={'poo poo poo'} />
      </div>
      <h1>Education</h1>
    </div>
  );
};

export default About;
