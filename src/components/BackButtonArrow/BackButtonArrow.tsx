// BASE MODULES
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const BackButtonArrow = () => (
  <FontAwesomeIcon
    style={{ color: '#5448a1' }}
    icon={faAngleLeft as IconProp}
  />
);

export default BackButtonArrow;
