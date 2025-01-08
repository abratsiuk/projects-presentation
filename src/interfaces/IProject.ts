import { TProjectState } from '../types/TProjectState';
import { TTechnology } from '../types/TTechnology';

export interface IProject {
  code: string;
  imageSmall: string;
  imageMedium: string;
  images: string[];
  name: string;
  shortDescription: string;
  fullDescription: string;
  technology: TTechnology[];
  technologyAdditional: TTechnology[];
  comment: string;
  state: TProjectState;
  pages: string;
  repo: string;
}
