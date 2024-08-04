// BASE MODULES
import { Link } from 'react-router-dom';

// CUSTOM MODULES
import styles from './BackButton.module.scss';
import BackButtonArrow from '../BackButtonArrow/BackButtonArrow';

interface BackButtonProps {
  copy: string;
  path: string;
}

const BackButton = ({ copy, path }: BackButtonProps) => {
  return (
    <section className={styles.BackButtonContainer}>
      <BackButtonArrow />
      <Link to={path}>{copy}</Link>
    </section>
  );
};

export default BackButton;
