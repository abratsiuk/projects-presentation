import { projectsDataRu } from './projectsDataRu';
import { personData } from './personData';
import { IProject } from '../interfaces/IProject';
import { IPerson } from '../interfaces/IPerson';
import { TProjectState } from '../types/TProjectState';
import { projectStateImagesData } from './projectStateImagesData';

export const getProjects = (): IProject[] => projectsDataRu;

export const getProject = (code: string): IProject | undefined => {
  return projectsDataRu.find((project) => project.code === code);
};

export const getPerson = (): IPerson => personData;

export const getProjectStateImage = (state: TProjectState): string => {
  return projectStateImagesData[state];
};
