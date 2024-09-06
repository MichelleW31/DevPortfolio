export enum Path {
  ROOT = '/',
  ABOUT_SECTION = '/#aboutSection',
  ABOUT_ME = '/about_me',
  MY_WORK = '/work',
  CONTACT = '/contact',
  MOBILE_PROJECT_LIST = '/project_list',
  DESKTOP_PROJECT_LIST = '/work/project_list',
  PROJECT_DETAILS = '/project_list/project_details',
}

export enum ProjectTypes {
  COMPANY = 'company',
  FREELANCE = 'freelance',
  SIDE = 'side',
}

export interface IProjectType {
  name: string;
  type: string;
  image: string;
}

export interface IProject {
  name: string;
  projectType: string;
  technologies: string[];
  overview: string;
  live_link?: string;
  github_link?: string;
  images: IImage[];
}

export interface IImage {
  original: string;
  thumbnail: string;
}

export interface IState {
  project: {
    projectType: IProjectType;
    project: IProject;
  };
}
