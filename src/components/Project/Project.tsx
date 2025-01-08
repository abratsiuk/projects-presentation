import { useParams } from 'react-router-dom';
import { Projects } from '../Projects';
import { ProjectItem } from '../ProjectItem';
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
      <Projects type="small" />
      {project ? <ProjectItem type="large" project={project} /> : <NotFound />}
    </div>
  );
};
