// BASE MODULES
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import Bar from '../../components/Bar/Bar';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { IProjectType, Path } from '../../types';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import projectTypes from '../../utilities/projectTypes.json';
import styles from './MyWork.module.scss';

const MyWork = () => {
  const windowSize = useWindowSize();

  const location = useLocation();
  const navigate = useNavigate();

  const myWorkContainer = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Check if there is state and perform the scroll action
    if (location.state) {
      if (
        myWorkContainer.current &&
        location.state.from === Path.MOBILE_PROJECT_LIST
      ) {
        myWorkContainer.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset the location state to avoid repeated actions on reload
    navigate(location.pathname, { replace: true, state: null });
  }, []);

  const projectTypeView = projectTypes.data.map((projectType: IProjectType) => {
    return <ProjectPreview projectType={projectType} key={projectType.name} />;
  });

  return (
    <section className={styles.MyWorkContainer} ref={myWorkContainer}>
      <h2 className={styles.TitleCopy}>My Work</h2>
      <Bar
        bgColor={isDesktop(windowSize) ? '#5448a1' : '#fff'}
        width={isDesktop(windowSize) ? '40%' : '75%'}
      />

      <section className={styles.ProjectsContainer}>{projectTypeView}</section>
    </section>
  );
};

export default MyWork;
