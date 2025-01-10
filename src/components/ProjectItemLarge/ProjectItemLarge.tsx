import React from 'react';
import './ProjectItemLarge.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';

export const ProjectItemLarge: React.FC<IProject> = ({
  name,
  state,
  demo,
  repo,
  imageMedium,
  images = [],
  shortDescription,
  fullDescription = [],
  technology,
  technologyAdditional,
  comment,
  technologyDescription = [],
}) => {
  return (
    <div className="ProjectItemLarge">
      <div className="ProjectItemLarge__head">
        <div className="ProjectItemLarge__state">
          <State state={state} />
        </div>

        <div className="ProjectItemLarge__name">{name}</div>

        {demo ? (
          <div className="ProjectItemLarge__demo">
            <a
              href={demo}
              title="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              demo
            </a>
          </div>
        ) : (
          <div className="ProjectItemLarge__demo ProjectItemLarge__demo_disabled">
            demo (скоро)
          </div>
        )}

        <div className="ProjectItemLarge__repo">
          <a href={repo} title="repo" target="_blank" rel="noopener noreferrer">
            repo
          </a>
        </div>

        <div className="ProjectItemLarge__description">{shortDescription}</div>
      </div>

      <img
        className="ProjectItemLarge__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="project image"
      />

      {fullDescription.length
        ? fullDescription.map((item) => (
            <div className="ProjectItemLarge__fullDescription">{item}</div>
          ))
        : null}

      {images.length
        ? images.map((image) => (
            <img
              className="ProjectItemLarge__image ProjectItemLarge__image_additional"
              src={`${import.meta.env.BASE_URL}${image}`}
              alt="project image"
            />
          ))
        : null}

      <div className="ProjectItemLarge__comment">{comment}</div>

      {technologyDescription.length
        ? technologyDescription.map((item, index) => (
            <div
              className={`ProjectItemLarge__technologyDescription ${index === 0 ? 'ProjectItemLarge__technologyDescription_first' : ''}`}
            >
              {item}
            </div>
          ))
        : null}

      <div className="ProjectItemLarge__technology">
        <Technology technology={technology} />
      </div>
      <div className="ProjectItemLarge__technology ProjectItemLarge__technology-additional">
        <Technology technology={technologyAdditional} />
      </div>
    </div>
  );
};
