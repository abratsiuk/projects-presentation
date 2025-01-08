import { useParams } from 'react-router-dom';
import { ProjectsShort } from '../ProjectsShort';
import { ProjectItemLarge } from '../ProjectItemLarge';
import { getProject } from '../../services';
import { NotFound } from '../NotFound';
import './Project.scss';

export const Project = () => {
  const { code } = useParams();
  console.log(code);
  const project = getProject(code);
  console.log(project);

  return (
    <div className="Project">
      <ProjectsShort />
      {project ? (
        <ProjectItemLarge key={project.code} {...project} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};
