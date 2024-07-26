// BASE MODULES

// CUSTOM MODULES
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import styles from './Header.module.scss';

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <section className={styles.HeaderContainer}>
      <Logo width={30} />

      {isDesktop(windowSize) && <Navigation />}
    </section>
  );
};

export default Header;
