import React from 'react';
import { ProjectItemSmall } from '../ProjectItemSmall';
import { ProjectItemMedium } from '../ProjectItemMedium';
import { ProjectItemLarge } from '../ProjectItemLarge';
import './ProjectItem.scss';
import { IProjectItemProps } from '../../interfaces/IProjectItemProps';

export const ProjectItem: React.FC<IProjectItemProps> = ({ type, project }) => {
  switch (type) {
    case 'small':
      return <ProjectItemSmall {...project} />;
    case 'medium':
      return <ProjectItemMedium {...project} />;
    case 'large':
      return <ProjectItemLarge {...project} />;
    default:
      return null;
  }
};
