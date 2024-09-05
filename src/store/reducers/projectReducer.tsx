import { SET_PROJECT, SET_PROJECT_TYPE } from '../actions/actionTypes';

const initialState = {
  projectType: {
    name: '',
    type: '',
    image: '',
  },
  project: {
    name: '',
    projectType: '',
    tecnologies: '',
    overview: '',
    live_link: '',
    github_link: '',
    images: [''],
  },
};

const projectReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_PROJECT_TYPE:
      return {
        ...state,
        projectType: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
