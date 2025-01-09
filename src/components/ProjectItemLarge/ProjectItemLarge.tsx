import React from 'react';
import './ProjectItemLarge.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';

export const ProjectItemLarge: React.FC<IProject> = ({
  imageMedium,
  images = [],
  name,
  shortDescription,
  fullDescription,
  technology,
  technologyAdditional,
  comment,
  state,
  demo,
  repo,
}) => {
  return (
    <div className="ProjectItemLarge">
      <div className="ProjectItemLarge__head">
        <div className="ProjectItemLarge__state">
          <State state={state} />
        </div>

        <div className="ProjectItemLarge__name">{name}</div>

        <div className="ProjectItemLarge__description">{shortDescription}</div>

        <div className="ProjectItemLarge__demo">
          <a href={demo} title="demo" target="_blank" rel="noopener noreferrer">
            demo
          </a>
        </div>
        <div className="ProjectItemLarge__repo">
          <a href={repo} title="repo" target="_blank" rel="noopener noreferrer">
            repo
          </a>
        </div>
      </div>

      <img
        className="ProjectItemLarge__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="project image"
      />

      <div className="ProjectItemLarge__description">{fullDescription}</div>

      <div className="ProjectItemLarge__description">{comment}</div>

      <div className="ProjectItemLarge__images">
        {images.length
          ? images.map((image) => (
              <img
                className="ProjectItemLarge__imageItem"
                src={`${import.meta.env.BASE_URL}${image}`}
                alt="project image"
              />
            ))
          : null}
      </div>

      <div className="ProjectItemLarge__technology">
        <Technology technology={technology} />
      </div>
      <div className="ProjectItemLarge__technologyAdditional">
        <Technology technology={technologyAdditional} />
      </div>
    </div>
  );
};
