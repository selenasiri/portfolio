import React from 'react';
import PROJECTS from '../data/projects';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div>
      <h2>Highlighted Projects</h2>
      <div>
        {PROJECTS.map(PROJECT => {
          return <ProjectItem key={PROJECT.id} project={PROJECT} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
