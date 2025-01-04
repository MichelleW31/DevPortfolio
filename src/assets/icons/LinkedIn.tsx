// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

const LinkedIn = () => {
  return <FontAwesomeIcon icon={faLinkedin as IconProp} color="#5448a1" />;
};

export default LinkedIn;
