// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

const Github = () => {
  return <FontAwesomeIcon icon={faGithub as IconProp} color="#5448a1" />;
};

export default Github;
