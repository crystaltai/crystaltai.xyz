import React from 'react';
import './Experience.css';

const Experience = ({ logo, entity, role, description }) => {
  return (
    <div className='experience-card'>
      <div className='experience-logo'></div>
      <div className='experience-details'>
        <div>
          <h4>{entity}</h4>
          <h4>{role}</h4>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
