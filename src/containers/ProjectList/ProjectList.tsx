// BASE MODULES
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { IProject, IProjectType, IState, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import Bar from '../../components/Bar/Bar';
import projectData from '../../utilities/projects.json';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import styles from './ProjectList.module.scss';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import BackButtonArrow from '../../components/BackButtonArrow/BackButtonArrow';
import ProjectDetailsView from '../../components/ProjectDetailsView/ProjectDetailsView';

interface ProjectListProps {
  projectType: IProjectType;
}

const ProjectList = ({ projectType }: ProjectListProps) => {
  const [showDesktopProjectDetails, setDesktopShowProjectDetails] =
    useState<boolean>(true);

  const windowSize = useWindowSize();

  const projects: IProject[] =
    projectData[projectType.type as keyof typeof projectData];

  const projectListView = projects.map((project) => {
    return (
      <ProjectPreview
        project={project}
        key={project.name}
        setDesktopShowProjectDetails={setDesktopShowProjectDetails}
      />
    );
  });

  return (
    <section className={styles.ProjectListContainer}>
      <section className={styles.Projects}>
        {!isDesktop(windowSize) ? (
          <BackButton copy="Back to My Work" path={Path.ROOT} />
        ) : (
          <>
            <Link className={styles.BackLink} to={Path.MY_WORK}>
              <BackButtonArrow />
              <span className={styles.BackLinkCopy}>Back to My Work</span>
            </Link>
          </>
        )}

        <section className={styles.NameCopyContainer}>
          <h2 className={styles.TitleCopy}>
            {capitalizeFirstLetter(projectType.type)} Projects
          </h2>
        </section>

        <Bar
          bgColor={isDesktop(windowSize) ? '#5448a1' : '#fff'}
          width={isDesktop(windowSize) ? '80%' : '75%'}
        />

        <section className={styles.ProjectListView}>{projectListView}</section>
      </section>

      {isDesktop(windowSize) && showDesktopProjectDetails ? (
        <section className={styles.ProjectDetails}>
          <ProjectDetailsView />
        </section>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    projectType: state.project.projectType,
  };
};

export default connect(mapStateToProps)(ProjectList);
