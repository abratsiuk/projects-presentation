import './Projects.scss';
import { getProjects } from '../../services/api';
import { ProjectItemMedium } from '../ProjectItemMedium';

export const Projects = () => {
  const projects = getProjects();
  return (
    <div className="Projects">
      {projects.map((project) => (
        <ProjectItemMedium key={project.code} {...project} />
      ))}
    </div>
  );
};
