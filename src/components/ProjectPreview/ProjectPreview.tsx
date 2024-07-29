// BASE MODULES
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import { Path } from '../../types';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  copy: string;
  image: string;
}

const ProjectPreview = ({ copy, image }: ProjectPreviewProps) => {
  const navigate = useNavigate();

  const projectClick = () => {
    navigate(Path.MOBILE_PROJECT_LIST);
  };

  return (
    <section
      className={styles.ProjectPreviewContainer}
      onClick={() => projectClick()}
    >
      <p>{copy} Projects</p>
      <section className={styles.ProjectPreviewImage}></section>
    </section>
  );
};

export default ProjectPreview;
