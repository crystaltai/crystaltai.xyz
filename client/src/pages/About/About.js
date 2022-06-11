import React from 'react';
import Experience from '../../components/Experience/Experience';
import ExperienceList from './constants';
import './About.css';
import '../../App.css';

const About = () => {
  return (
    <div className='wrapper'>
      <h1>Career</h1>
      <div className='experience-wrapper'>
        {ExperienceList.map(({ entity, logo, role, summary, years }) => (
          <Experience
            entity={entity}
            logo={logo}
            role={role}
            summary={summary}
            years={years}
            key={role}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
