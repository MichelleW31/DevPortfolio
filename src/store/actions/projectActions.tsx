import { IProject } from '../../types';
import { SET_PROJECT, SET_PROJECT_TYPE } from './actionTypes';

export const setProjectType = (projectType: string) => {
  return {
    type: SET_PROJECT_TYPE,
    payload: projectType,
  };
};

export const setProject = (project: IProject) => {
  return {
    type: SET_PROJECT,
    payload: project,
  };
};
