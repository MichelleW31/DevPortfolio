// BASE MODULES
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// CUSTOM MODULES
import ProjectImageGallery from '../ImageGallery/ProjectImageGallery';
import { IProject } from '../../types';
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon';
import styles from './ProjectDetailsView.module.scss';

interface ProjectDetailsViewProps {
  project: IProject;
}

const ProjectDetailsView = ({ project }: ProjectDetailsViewProps) => {
  const techIcons = project.technologies.map((technology) => (
    <TechnologyIcon techName={technology} key={technology} />
  ));

  return (
    <section className={styles.ProjectDetailsViewContainer}>
      <ProjectImageGallery images={project.images} />

      <section className={styles.TechnologyContainer}>{techIcons}</section>

      <section className={styles.OverviewContainer}>
        <h3 className={styles.OverviewTitle}>Overview</h3>
        <p className={styles.OverviewCopy}>{project.overview}</p>

        {project.github_link && (
          <p className={styles.LinkCopy}>
            Github Link:{' '}
            <Link to={project.github_link}>{project.github_link}</Link>
          </p>
        )}
        {project.live_link && (
          <p className={styles.LinkCopy}>
            Live Link: <Link to={project.live_link}>{project.live_link}</Link>
          </p>
        )}
      </section>
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    project: state.project.project,
  };
};

export default connect(mapStateToProps)(ProjectDetailsView);
