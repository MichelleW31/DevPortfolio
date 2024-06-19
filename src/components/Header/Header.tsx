// BASE MODULES

// CUSTOM MODULES
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.HeaderContainer}>
      <Logo width={30} />
    </section>
  );
};

export default Header;
