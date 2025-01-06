// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { SocialMediaCopy, SocialMediaLinks } from '../../types';
import styles from './LinkedIn.module.scss';

const LinkedIn = () => {
  const windowSize = useWindowSize();

  return (
    <>
      {isDesktop(windowSize) ? (
        <section>
          <FontAwesomeIcon
            icon={faLinkedin as IconProp}
            color="#5448a1"
            size="2x"
          />

          {isDesktop(windowSize) && (
            <a
              href={SocialMediaLinks.LINKEDIN}
              target="_blank"
              className={styles.Link}
            >
              {SocialMediaCopy.LINKEDIN}
            </a>
          )}
        </section>
      ) : (
        <section>
          <a
            href={SocialMediaLinks.LINKEDIN}
            target="_blank"
            className={styles.Link}
          >
            <FontAwesomeIcon
              icon={faLinkedin as IconProp}
              color="#5448a1"
              size="2x"
            />
          </a>
        </section>
      )}
    </>
  );
};

export default LinkedIn;
