export enum Path {
  ROOT = '/',
  ABOUT_ME = '/about_me',
  MY_WORK = '/work',
  CONTACT = '/contact',
  COMPANY_PROJECTS = '/work/company',
  FREELANCE_PROJECTS = '/work/freelance',
  SIDE_PROJECTS = '/work/side',
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
  path: string;
}
