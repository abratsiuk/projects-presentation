import React from 'react';
import './Descriptions.scss';
import { IDescriptionsProps } from '../../interfaces/IDescriptionsProps';

export const Descriptions: React.FC<IDescriptionsProps> = ({
  parentClassName,
  parentClassName_first,
  texts = [],
}) => {
  return (
    <>
      {texts.length
        ? texts.map((item, index) => (
            <div
              className={`${parentClassName} ${index === 0 ? `${parentClassName_first}` : ''}`}
            >
              {item}
            </div>
          ))
        : null}
    </>
  );
};
