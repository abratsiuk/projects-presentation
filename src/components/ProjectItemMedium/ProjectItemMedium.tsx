import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectItemMedium.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';

export const ProjectItemMedium: React.FC<IProject> = ({
  code,
  imageMedium,
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
          {technology.map((item) => (
            <Technology key={item.name} {...item} />
          ))}
        </div>
        <div className="ProjectItemMedium__state">
          <State state={state} />
        </div>
        <div className="ProjectItemMedium__pages">pages: {pages}</div>
        <div className="ProjectItemMedium__pages">repo: {repo}</div>
      </div>
    </div>
  );
};
