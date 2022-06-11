import React from 'react';
import './Experience.css';

const Experience = ({ logo, entity, role, summary, years }) => {
  return (
    <div className='experience-card'>
      <div className='experience-logo'>
        <img src={logo} alt={`${entity} logo`} className='entity-logo' />
      </div>
      <div className='experience-details'>
        <div className='experience-header'>
          <h3 className='experience-entity'>{entity}</h3>
          <h5 className='experience-years'>{years}</h5>
        </div>
        <div className='experience-description'>
          <h5 className='experience-role'>{role}</h5>
          {/* <h5>{summary}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
