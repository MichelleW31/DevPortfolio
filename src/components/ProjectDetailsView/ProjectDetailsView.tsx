// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import ProjectImageGallery from '../ImageGallery/ProjectImageGallery';
import { IProject, IState } from '../../types';
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon';
import Bar from '../../components/Bar/Bar';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import styles from './ProjectDetailsView.module.scss';

interface ProjectDetailsViewProps {
  project: IProject;
}

const ProjectDetailsView = ({ project }: ProjectDetailsViewProps) => {
  const windowSize = useWindowSize();

  const techIcons = project.technologies.map((technology) => (
    <TechnologyIcon techName={technology} key={technology} />
  ));

  return (
    <section className={styles.ProjectDetailsViewContainer}>
      <section className={styles.NameCopyContainer}>
        <h2 className={styles.TitleCopy}>
          {capitalizeFirstLetter(project.name)}
        </h2>
      </section>

      {!isDesktop(windowSize) && (
        <Bar bgColor="#fff" width={isDesktop(windowSize) ? '45%' : '75%'} />
      )}

      <ProjectImageGallery images={project.images} />

      <section className={styles.TechnologyContainer}>{techIcons}</section>

      <section className={styles.OverviewContainer}>
        <h3 className={styles.OverviewTitle}>Overview</h3>
        <p className={styles.OverviewCopy}>{project.overview}</p>
        {project.secondary_overview && (
          <p className={styles.SecondaryOverviewCopy}>
            {project.secondary_overview}
          </p>
        )}

        {project.github_link && (
          <p className={styles.LinkCopy}>
            Github Link:{' '}
            <a href={project.github_link} target="_blank">
              {project.github_link}
            </a>
          </p>
        )}
        {project.live_link && (
          <p className={styles.LinkCopy}>
            Link to Site:{' '}
            <a href={project.live_link} target="_blank">
              {project.name}
            </a>
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
