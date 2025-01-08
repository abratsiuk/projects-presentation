import React from 'react';
import { TTechnology } from '../../types/TTechnology';
import './TechnologyItem.scss';

export const TechnologyItem: React.FC<TTechnology> = ({ image, name }) => {
  return (
    <div className="TechnologyItem">
      <img
        className="TechnologyItem__image"
        src={`${import.meta.env.BASE_URL}${image}`}
        alt="technology logo"
      />
      <span className="TechnologyItem__name">{name}</span>
    </div>
  );
};
