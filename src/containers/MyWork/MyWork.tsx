// BASE MODULES
import { useEffect, useRef, useState } from 'react';

// CUSTOM MODULES
import Bar from '../../components/Bar/Bar';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { IProjectType } from '../../types';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import projectTypes from '../../utilities/projectTypes.json';
import styles from './MyWork.module.scss';

const MyWork = () => {
  const [showDesktopProjectDetails, setDesktopShowProjectDetails] =
    useState<boolean>(false);
  const windowSize = useWindowSize();
  console.log(showDesktopProjectDetails);

  const myWorkContainer = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (myWorkContainer.current) {
      myWorkContainer.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const projectTypeView = projectTypes.data.map((projectType: IProjectType) => {
    return (
      <ProjectPreview
        projectType={projectType}
        key={projectType.name}
        setDesktopShowProjectDetails={setDesktopShowProjectDetails}
      />
    );
  });

  return (
    <section className={styles.MyWorkContainer} ref={myWorkContainer}>
      <h2 className={styles.TitleCopy}>My Work</h2>
      <Bar
        bgColor={isDesktop(windowSize) ? '#5448a1' : '#fff'}
        width={isDesktop(windowSize) ? '45%' : '75%'}
      />

      <section className={styles.ProjectsContainer}>{projectTypeView}</section>
    </section>
  );
};

export default MyWork;
