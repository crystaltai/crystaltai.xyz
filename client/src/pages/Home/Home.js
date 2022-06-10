import React from 'react';
import Intro from '../../components/Intro/Intro';
import Project from '../../components/Project/Project';
import './Home.css';
import '../../App.css';

// Project Details -----
const projects = [
  {
    title: 'Personal Website',
    status: 'In Progress',
    summary:
      "A personal website built using React and Vanilla CSS to implement what I've learned, as well as to document and share my web developer journey. This website will be an on-going project.",
    link: 'https://crystaltai.notion.site/crystaltai-xyz-516510bddf3d460aad16e2db1f6e2bb0',
  },
  {
    title: 'Project B',
    status: 'Exploring',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Project C',
    status: 'Exploring',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
// Project Details -----

const Home = () => {
  return (
    <div className='wrapper'>
      <Intro />
      <h1>Current Projects</h1>
      {projects.map(project => (
        <Project
          title={project.title}
          status={project.status}
          summary={project.summary}
          link={project.link}
          key={project.title}
        />
      ))}
    </div>
  );
};

export default Home;
