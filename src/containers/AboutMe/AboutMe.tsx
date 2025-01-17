// BASE MODULES

// CUSTOM MODULES
import Bar from '../../components/Bar/Bar';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
// import Animation from '../../components/Animation/Animation';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  const windowSize = useWindowSize();

  return (
    <section className={styles.AboutMeContainer}>
      <section className={styles.NameCopyContainer}>
        <h1 className={styles.NameCopy}>Michelle Williams</h1>
        <h2 className={styles.TitleCopy}>Software Engineer</h2>
      </section>

      <Bar bgColor="#5448A1" width={isDesktop(windowSize) ? '40%' : '75%'} />

      <section className={styles.AboutMeCopy}>
        <h3 className={styles.AboutMeTitle}>About Me</h3>

        <p>
          As a full stack engineer with a strong design background, I thrive at
          the intersection of creativity and technology. My journey began with a
          passion for creating visually engaging experiences and has since
          evolved into a skill set that bridges front-end aesthetics with
          back-end functionality.
        </p>

        <p>
          Outside of making cool things, I like to spend my time traveling and
          taking on new adventures. Whether hiking through forests or jumping
          out of planes, I embrace each experience and adventure as a chance to
          learn and grow, much like my journey in tech.
        </p>

        {/* {isDesktop(windowSize) && <Animation />} */}
      </section>
    </section>
  );
};

export default AboutMe;
