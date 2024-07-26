// BASE MODULES
import { NavLink } from 'react-router-dom';

// CUSTOM MODULES
import styles from './Navigation.module.scss';
import { Path } from '../../types';

const Navigation = () => {
  return (
    <section className={styles.NavigationContainer}>
      <NavLink to={Path.ABOUT_ME}>About</NavLink>
      <NavLink to={Path.MY_WORK}>My Work</NavLink>
      <NavLink to={Path.CONTACT}>Get In Touch</NavLink>
    </section>
  );
};

export default Navigation;
