import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProjectItemSmall.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';

export const ProjectItemSmall: React.FC<IProject> = ({
  code,
  imageSmall,
  nameShort,
  technology,
}) => {
  const navigate = useNavigate();
  const { code: codeParam } = useParams();

  return (
    <div
      className={`ProjectItemSmall ${code === codeParam ? 'ProjectItemSmall_active' : ''}`}
      onClick={() => navigate(`/project/${code}`)}
    >
      <div className="ProjectItemSmall__name">{nameShort}</div>

      <div className="ProjectItemSmall__data">
        <img
          className="ProjectItemSmall__image"
          src={`${import.meta.env.BASE_URL}${imageSmall}`}
          alt="project image"
        />
        <div className="ProjectItemSmall__technology">
          <Technology technology={technology} />
        </div>
      </div>
    </div>
  );
};
