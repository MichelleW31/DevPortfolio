// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/michellewilliams31/" target="_blank">
      <FontAwesomeIcon
        icon={faLinkedin as IconProp}
        color="#5448a1"
        size="2x"
      />
    </a>
  );
};

export default LinkedIn;
