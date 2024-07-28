// BASE MODULES

// CUSTOM MODULES
import Bar from '../../components/Bar/Bar';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { IProjectType, Path, ProjectTypes } from '../../types';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import styles from './MyWork.module.scss';

const MyWork = () => {
  const windowSize = useWindowSize();

  const projectTypes = [
    {
      type: ProjectTypes.COMPANY,
      copy: ProjectTypes.COMPANY,
      image: '',
      path: Path.COMPANY_PROJECTS,
    },
    {
      type: ProjectTypes.FREELANCE,
      copy: ProjectTypes.FREELANCE,
      image: '',
      path: Path.FREELANCE_PROJECTS,
    },
    {
      type: ProjectTypes.SIDE,
      copy: ProjectTypes.SIDE,
      image: '',
      path: Path.SIDE_PROJECTS,
    },
  ];

  const projectView = projectTypes.map((projectType: IProjectType) => (
    <ProjectPreview
      copy={projectType.copy}
      image={projectType.image}
      path={projectType.copy}
      key={projectType.copy}
    />
  ));

  return (
    <section className={styles.MyWorkContainer}>
      <h2 className={styles.TitleCopy}>My Work</h2>
      <Bar
        bgColor={isDesktop(windowSize) ? '#5448a1' : '#fff'}
        width={isDesktop(windowSize) ? '45%' : '75%'}
      />

      <section className={styles.ProjectsContainer}>{projectView}</section>
    </section>
  );
};

export default MyWork;
