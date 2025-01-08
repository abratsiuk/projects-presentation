import React from 'react';
import './ProjectItem.scss';
import { IProjectItemProps } from './IProjectItemProps';
import { Technology } from '../TechnologyItem';

export const ProjectItem: React.FC<IProjectItemProps> = ({
  imageMedium,
  name,
  shortDescription,
  technology,
  state,
  pages,
  repo,
}) => {
  return (
    <div className="ProjectItem">
      <img
        className="ProjectItem__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="person photo"
      />
      <div className="ProjectItem__data">
        <div className="ProjectItem__name">{name}</div>
        <div className="ProjectItem__description">{shortDescription}</div>
        <div className="ProjectItem__technology">
          {technology.map((item) => (
            <Technology key={item.name} {...item} />
          ))}
        </div>
        <div className="ProjectItem__state">state: {state}</div>
        <div className="ProjectItem__pages">pages: {pages}</div>
        <div className="ProjectItem__pages">repo: {repo}</div>
      </div>
    </div>
  );
};

/* */
