import React from 'react';
import './ProjectItemLarge.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';

export const ProjectItemLarge: React.FC<IProject> = ({
  code,
  imageMedium,
  name,
  shortDescription,
  technology,
  state,
  pages,
  repo,
}) => {
  return (
    <div className="ProjectItemLarge">
      <img
        className="ProjectItemLarge__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="project image"
      />
      <div className="ProjectItemLarge__data">
        <div className="ProjectItemLarge__name">{name}</div>
        <div className="ProjectItemLarge__description">{shortDescription}</div>
        <div className="ProjectItemLarge__technology">
          {technology.map((item) => (
            <Technology key={item.name} {...item} />
          ))}
        </div>
        <div className="ProjectItemLarge__state">
          <State state={state} />
        </div>
        <div className="ProjectItemLarge__pages">pages: {pages}</div>
        <div className="ProjectItemLarge__pages">repo: {repo}</div>
      </div>
    </div>
  );
};

/* */
