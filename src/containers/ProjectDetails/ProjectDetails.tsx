// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { IProject, IState, Path } from '../../types';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import Bar from '../../components/Bar/Bar';
import styles from './ProjectDetails.module.scss';
import ProjectDetailsView from '../../components/ProjectDetailsView/ProjectDetailsView';

interface ProjectProps {
  project: IProject;
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const windowSize = useWindowSize();
  const backButtonTitle = capitalizeFirstLetter(project.projectType);

  return (
    <section className={styles.ProductDetailsContainer}>
      <BackButton
        copy={`Back to ${backButtonTitle} Projects`}
        path={Path.MOBILE_PROJECT_LIST}
      />

      <section className={styles.NameCopyContainer}>
        <h2 className={styles.TitleCopy}>
          {capitalizeFirstLetter(project.name)}
        </h2>
      </section>

      <Bar bgColor="#fff" width={isDesktop(windowSize) ? '45%' : '75%'} />

      <ProjectDetailsView />
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    project: state.project.project,
  };
};

export default connect(mapStateToProps)(ProjectDetails);
