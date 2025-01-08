import './ProjectsShort.scss';
import { getProjects } from '../../services/api';
import { ProjectItemSmall } from '../ProjectItemSmall';

export const ProjectsShort = () => {
  const projects = getProjects();
  return (
    <div className="Projects">
      {projects.map((project) => (
        <ProjectItemSmall key={project.name} {...project} />
      ))}
    </div>
  );
};
