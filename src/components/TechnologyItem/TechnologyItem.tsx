import React from 'react';
import { TTechnology } from '../../types/TTechnology';
import './TechnologyItem.scss';

export const TechnologyItem: React.FC<TTechnology> = ({ image, name }) => {
  const hideNames = ['JS', 'TS', 'React', 'JavaScript', 'TypeScript', 'Sass'];
  const hideName = hideNames.includes(name);
  return (
    <div className="TechnologyItem">
      <img
        className="TechnologyItem__image"
        src={`${import.meta.env.BASE_URL}${image}`}
        alt="technology logo"
      />
      {hideName ? null : <span className="TechnologyItem__name">{name}</span>}
    </div>
  );
};
