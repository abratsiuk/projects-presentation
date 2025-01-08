import React from 'react';
import './State.scss';
import { IStateProps } from '../../interfaces/IStateProps';
import { getProjectStateImage } from '../../services';

export const State: React.FC<IStateProps> = ({ state }) => {
  return (
    <div className="State">
      <img
        className="State__image"
        src={`${import.meta.env.BASE_URL}${getProjectStateImage(state)}`}
        alt="project state"
      />
    </div>
  );
};
