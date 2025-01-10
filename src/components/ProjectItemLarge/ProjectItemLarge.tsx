import React from 'react';
import './ProjectItemLarge.scss';
import { Technology } from '../Technology';
import { IProject } from '../../interfaces/IProject';
import { State } from '../State';
import { Descriptions } from '../Descriptions';
import { ExternalLink } from '../LinkExternal/ExternalLink';

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
        <State parentClassName="ProjectItemLarge__state" state={state} />

        <div className="ProjectItemLarge__name">{name}</div>

        <ExternalLink
          parentClassName="ProjectItemLarge__demo"
          href={demo}
          text="demo"
          parentClassName_disabled="ProjectItemLarge__demo_disabled"
          text_disabled="demo (скоро)"
        />

        <ExternalLink
          parentClassName="ProjectItemLarge__repo"
          href={repo}
          text="repo"
        />

        <div className="ProjectItemLarge__shortDescription">
          {shortDescription}
        </div>
      </div>

      <img
        className="ProjectItemLarge__image"
        src={`${import.meta.env.BASE_URL}${imageMedium}`}
        alt="project image"
      />

      <Descriptions
        parentClassName="ProjectItemLarge__fullDescription"
        parentClassName_first="ProjectItemLarge__fullDescription_first"
        texts={fullDescription}
      />

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

      <Descriptions
        parentClassName="ProjectItemLarge__technologyDescription"
        parentClassName_first="ProjectItemLarge__technologyDescription_first"
        texts={technologyDescription}
      />

      <div className="ProjectItemLarge__technology">
        <Technology technology={technology} />
      </div>
      <div className="ProjectItemLarge__technology ProjectItemLarge__technology-additional">
        <Technology technology={technologyAdditional} />
      </div>
    </div>
  );
};
