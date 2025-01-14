// BASE MODULES
import { Link } from 'react-router-dom';

// CUSTOM MODULES
import Logo from '../Logo/Logo';
import { Path } from '../../types';
import Navigation from '../Navigation/Navigation';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import styles from './Header.module.scss';

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <section className={styles.HeaderContainer}>
      <Link to={Path.ABOUT_ME}>
        <Logo width={37} />
      </Link>
      {isDesktop(windowSize) && <Navigation />}
    </section>
  );
};

export default Header;
