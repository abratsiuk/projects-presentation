import { TProjectState } from '../types/TProjectState';
import { TTechnology } from '../types/TTechnology';

export interface IProject {
  code: string;
  state: TProjectState;
  name: string;
  nameShort: string;
  repo: string;
  demo: string;
  imageSmall: string;
  imageMedium: string;
  images: string[];
  shortDescription: string;
  fullDescription: string[];
  technology: TTechnology[];
  technologyAdditional: TTechnology[];
  comment: string;
  technologyDescription: string[];
}
