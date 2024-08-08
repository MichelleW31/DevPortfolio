// BASE MODULES
import { useLocation, useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import BackButton from '../../components/BackButton/BackButton';
import { Path } from '../../types';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import styles from './ProjectDetails.module.scss';

// Pull in project here from redux store

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // will no longer need this. Will project type in the store
  const project = location.state.project;

  const backButtonTitle = capitalizeFirstLetter(project.projectType);

  return (
    <section>
      <BackButton
        copy={`Back to ${backButtonTitle} Projects`}
        path={(Path.MOBILE_PROJECT_LIST, { state: { projectType: 'company' } })}
      />
    </section>
  );
};

export default ProjectDetails;
