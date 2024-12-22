// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { IProject, IState, Path } from '../../types';
import { capitalizeFirstLetter } from '../../utilities/formatting';

import styles from './ProjectDetails.module.scss';
import ProjectDetailsView from '../../components/ProjectDetailsView/ProjectDetailsView';

interface ProjectProps {
  project: IProject;
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const backButtonTitle = capitalizeFirstLetter(project.projectType);

  return (
    <section className={styles.ProductDetailsContainer}>
      <BackButton
        copy={`Back to ${backButtonTitle} Projects`}
        path={Path.MOBILE_PROJECT_LIST}
      />

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
