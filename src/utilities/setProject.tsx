// BASE MODULES

// CUSTOM MODULES
import { IProjectType } from '../types';
import projectData from '../utilities/projects.json';

export const setDefaultProject = (projectType: IProjectType) => {
  return projectData[projectType.type as keyof typeof projectData][0];
};
