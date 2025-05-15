import { projectsData } from './projectsDataEn';
import { personData } from './personDataEn';
import { IProject } from '../interfaces/IProject';
import { IPerson } from '../interfaces/IPerson';
import { TProjectState } from '../types/TProjectState';
import { projectStateImagesData } from './projectStateImagesData';

export const getProjects = (): IProject[] => projectsData;
// projectsDataRu.filter((project) => project.code !== 'p4.uazdao');

export const getProject = (code: string | undefined): IProject | undefined => {
  if (!code) return projectsData[0];
  return projectsData.find((project) => project.code === code);
};

export const getPerson = (): IPerson => personData;

export const getProjectStateImage = (state: TProjectState): string => {
  return projectStateImagesData[state];
};
