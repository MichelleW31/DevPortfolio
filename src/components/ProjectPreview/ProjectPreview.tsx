// BASE MODULES
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import { IProject, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  type?: string;
  copy: string;
  image: string;
  project: IProject;
}

const ProjectPreview = ({
  copy,
  image,
  type,
  project,
}: ProjectPreviewProps) => {
  const windowSize = useWindowSize();

  const navigate = useNavigate();

  // If on project type component, then set the project type when a project type is clicked on
  // If on project component, then set the project when a project is clicked on
  // How to deter mine if it project type or project preview. Some type of flag or prop?
  const projectClick = () => {
    if (!isDesktop(windowSize)) {
      if (type) {
        // will no longer need to send as location state. Will project type in the store
        navigate(Path.MOBILE_PROJECT_LIST, { state: { projectType: type } });
      } else {
        navigate(Path.PROJECT_DETAILS, {
          state: { project: project },
        });
      }
    }
  };

  const projectName = capitalizeFirstLetter(copy);

  return (
    <section
      className={styles.ProjectPreviewContainer}
      onClick={() => projectClick()}
    >
      <p>{projectName}</p>
      <section className={styles.ProjectPreviewImage}></section>
    </section>
  );
};

export default ProjectPreview;
