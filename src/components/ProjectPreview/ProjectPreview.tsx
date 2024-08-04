// BASE MODULES
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import { Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  copy: string;
  image: string;
}

const ProjectPreview = ({ copy, image }: ProjectPreviewProps) => {
  const windowSize = useWindowSize();

  const navigate = useNavigate();

  const projectClick = () => {
    if (!isDesktop(windowSize)) {
      navigate(Path.MOBILE_PROJECT_LIST, { state: { projectType: copy } });
    }
  };

  const projectName = capitalizeFirstLetter(copy);

  return (
    <section
      className={styles.ProjectPreviewContainer}
      onClick={() => projectClick()}
    >
      <p>{projectName} Projects</p>
      <section className={styles.ProjectPreviewImage}></section>
    </section>
  );
};

export default ProjectPreview;
