import { TProjectItemType } from '../types/TProjectItemType';
import { IProject } from './IProject';

export interface IProjectItemProps {
  type: TProjectItemType;
  project: IProject;
}
