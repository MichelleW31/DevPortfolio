// BASE MODULES
import { useLocation } from 'react-router-dom';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { IProject, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import Bar from '../../components/Bar/Bar';
import projectData from '../../utilities/projectData.json';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import styles from './ProjectList.module.scss';

const ProjectList = () => {
  const location = useLocation();
  const windowSize = useWindowSize();
  const projectType: string = location.state.projectType;

  const projects: IProject[] = projectData[projectType];

  return (
    <section className={styles.ProjectListContainer}>
      <BackButton copy="Back to My Work" path={Path.ROOT} />

      <section className={styles.NameCopyContainer}>
        <h2 className={styles.TitleCopy}>
          {capitalizeFirstLetter(projectType)} Projects
        </h2>
      </section>

      <Bar bgColor="#fff" width={isDesktop(windowSize) ? '45%' : '75%'} />
    </section>
  );
};

export default ProjectList;
