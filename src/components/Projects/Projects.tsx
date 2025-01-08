import React from 'react';
import './Projects.scss';
import { getProjects } from '../../services/api';
import { ProjectItem } from '../ProjectItem';
import { IProjectsProps } from '../../interfaces/IProjectsProps';

export const Projects: React.FC<IProjectsProps> = ({ type }) => {
  const projects = getProjects();
  return (
    <div className="Projects">
      {projects.map((project) => (
        <ProjectItem key={project.code} type={type} project={project} />
      ))}
    </div>
  );
};
