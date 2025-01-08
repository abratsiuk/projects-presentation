import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectItemSmall.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';

export const ProjectItemSmall: React.FC<IProject> = ({
  code,
  imageSmall,
  name,
  shortDescription,
  technology,
  state,
  pages,
  repo,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="ProjectItemSmall"
      onClick={() => navigate(`/project/${code}`)}
    >
      <img
        className="ProjectItemSmall__image"
        src={`${import.meta.env.BASE_URL}${imageSmall}`}
        alt="project image"
      />
      <div className="ProjectItemSmall__data">
        <div className="ProjectItemSmall__name">{name}</div>
        <div className="ProjectItemSmall__technology">
          <Technology technology={technology} />
        </div>
        <div className="ProjectItemSmall__state">
          <State state={state} />
        </div>
      </div>
    </div>
  );
};

/* */
