export enum Path {
  ROOT = '/',
  ABOUT_SECTION = '/#aboutSection',
  ABOUT_ME = '/about_me',
  MY_WORK = '/work',
  CONTACT = '/contact',
  MOBILE_PROJECT_LIST = '/project_list',
  DESKTOP_PROJECT_LIST = '/work/project_list',
}

export enum ProjectTypes {
  COMPANY = 'company',
  FREELANCE = 'freelance',
  SIDE = 'side',
}

export interface IProjectType {
  type: string;
  copy: string;
  image: string;
}

export interface IProject {
  name: string;
  tecnologies: string;
  overview: string;
  live_link?: string;
  github_link?: string;
  images: string;
}
