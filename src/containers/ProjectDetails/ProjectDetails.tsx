// BASE MODULES
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { IProject, IState, Path } from '../../types';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import Bar from '../../components/Bar/Bar';
import TechnologyIcon from '../../components/TechnologyIcon/TechnologyIcon';
import ProjectImageGallery from '../../components/ImageGallery/ProjectImageGallery';
import styles from './ProjectDetails.module.scss';

interface ProjectProps {
  project: IProject;
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const windowSize = useWindowSize();
  const backButtonTitle = capitalizeFirstLetter(project.projectType);

  const techIcons = project.technologies.map((technology) => (
    <TechnologyIcon techName={technology} key={technology} />
  ));

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

export default connect(mapStateToProps)(ProjectDetails);
