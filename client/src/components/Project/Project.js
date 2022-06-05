import React from 'react';
import './Project.css';

const Project = ({ title, status, summary }) => {
  return (
    <div className='project-card'>
      <div className='project-header'>
        <div className='project-title'>
          <h5>{title}</h5>
        </div>
        <div className={`project-status ${status === 'In Progress' ? 'in-progress' : 'exploring'}`}>
          <h5>{status}</h5>
        </div>
      </div>
      <div className='project-summary'>
        <h5>{summary}</h5>
      </div>
    </div>
  );
};

export default Project;
