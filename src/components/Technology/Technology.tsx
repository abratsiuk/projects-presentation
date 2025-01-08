import React from 'react';
import { TTechnology } from '../../types/TTechnology';

export const Technology: React.FC<TTechnology> = ({ image, name, subName }) => {
  return (
    <div className="Technology">
      <img
        className="Technology__image"
        src={`${import.meta.env.BASE_URL}${image}`}
        alt="technology logo"
      />
      {!['JS', 'React', 'TS', 'Sass'].includes(name) ? (
        <span className="Technology__name">{name}</span>
      ) : null}
      {subName && <sub className="Technology__subName">{subName}</sub>}
    </div>
  );
};
