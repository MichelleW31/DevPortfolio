// BASE MODULES

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { Path } from '../../types';
import styles from './ProjectList.module.scss';

const ProjectList = () => {
  return (
    <section className={styles.ProjectListContainer}>
      <BackButton copy="Back to My Work" path={Path.ROOT} />
    </section>
  );
};

export default ProjectList;
