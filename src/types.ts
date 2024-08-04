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
  COMPANY = 'Company',
  FREELANCE = 'Freelance',
  SIDE = 'Side',
}

export interface IProjectType {
  type: string;
  copy: string;
  image: string;
}
