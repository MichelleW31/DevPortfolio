// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { SocialMediaCopy, SocialMediaLinks } from '../../types';
import styles from './Github.module.scss';

const Github = () => {
  const windowSize = useWindowSize();

  return (
    <>
      {isDesktop(windowSize) ? (
        <section className={styles.GithubContainer}>
          <FontAwesomeIcon
            icon={faGithub as IconProp}
            color="#5448a1"
            size="2x"
          />

          {isDesktop(windowSize) && (
            <a
              href={SocialMediaLinks.GITHUB}
              target="_blank"
              className={styles.Link}
            >
              {SocialMediaCopy.GITHUB}
            </a>
          )}
        </section>
      ) : (
        <section className={styles.GithubContainer}>
          <a
            href={SocialMediaLinks.GITHUB}
            target="_blank"
            className={styles.Link}
          >
            <FontAwesomeIcon
              icon={faGithub as IconProp}
              color="#5448a1"
              size="2x"
            />
          </a>{' '}
        </section>
      )}
    </>
  );
};

export default Github;
