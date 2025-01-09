// BASE MODULES
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// CUSTOM MODULES
import styles from './BackButton.module.scss';
import BackButtonArrow from '../BackButtonArrow/BackButtonArrow';
import { Path } from '../../types';

interface BackButtonProps {
  copy: string;
  path: any;
}

const BackButton = ({ copy, path }: BackButtonProps) => {
  const location = useLocation();

  return (
    <section className={styles.BackButtonContainer}>
      <BackButtonArrow />
      {location.pathname === Path.MOBILE_PROJECT_LIST ? (
        <Link to={path} state={{ from: Path.MOBILE_PROJECT_LIST }}>
          {copy}
        </Link>
      ) : (
        <Link to={path}>{copy}</Link>
      )}
    </section>
  );
};

export default BackButton;
