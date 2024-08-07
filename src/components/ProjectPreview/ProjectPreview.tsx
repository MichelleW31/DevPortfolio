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

  const projectClick = () => {
    if (!isDesktop(windowSize)) {
      if (type) {
        navigate(Path.MOBILE_PROJECT_LIST, { state: { projectType: type } });
      } else {
        navigate(Path.PROJECT_DETAILS, { state: { project: project } });
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
