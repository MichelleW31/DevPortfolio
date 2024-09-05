// BASE MODULES
import { connect } from 'react-redux';

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

interface ProjectListProps {
  projectType: IProjectType;
}

const ProjectList = ({ projectType }: ProjectListProps) => {
  const windowSize = useWindowSize();

  const projects: IProject[] = projectData[projectType.type];

  const projectListView = projects.map((project) => {
    return <ProjectPreview project={project} key={project.name} />;
  });

  return (
    <section className={styles.ProjectListContainer}>
      <BackButton copy="Back to My Work" path={Path.ROOT} />

      <section className={styles.NameCopyContainer}>
        <h2 className={styles.TitleCopy}>
          {capitalizeFirstLetter(projectType.type)} Projects
        </h2>
      </section>

      <Bar bgColor="#fff" width={isDesktop(windowSize) ? '45%' : '75%'} />

      <section className={styles.ProjectListView}>{projectListView}</section>
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    projectType: state.project.projectType,
  };
};

export default connect(mapStateToProps)(ProjectList);
