import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectItemMedium.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';

export const ProjectItemMedium: React.FC<IProject> = ({
  code,
  imageMedium,
  name,
  shortDescription,
  technology,
  technologyAdditional,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="ProjectItemMedium"
      onClick={() => navigate(`/project/${code}`)}
    >
      <img
        className="ProjectItemMedium__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="project image"
      />

      <div className="ProjectItemMedium__data">
        <div className="ProjectItemMedium__name">{name}</div>
        <div className="ProjectItemMedium__description">{shortDescription}</div>
        <div className="ProjectItemMedium__technology">
          <Technology technology={technology} />
        </div>
        <div className="ProjectItemMedium__technologyAdditional">
          <Technology technology={technologyAdditional} />
        </div>
      </div>
    </div>
  );
};
