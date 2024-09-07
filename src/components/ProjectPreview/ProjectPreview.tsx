// BASE MODULES
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IProject, IProjectType, IState, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { setProject, setProjectType } from '../../store/actions/projectActions';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  projectType?: IProjectType;
  project?: IProject;
  setProjectType: any;
  setProject: any;
  setDesktopShowProjectDetails: any;
}

const ProjectPreview = ({
  projectType,
  project,
  setProjectType,
  setProject,
  setDesktopShowProjectDetails,
}: ProjectPreviewProps) => {
  const windowSize = useWindowSize();

  const navigate = useNavigate();

  const projectClick = () => {
    if (!isDesktop(windowSize)) {
      if (projectType) {
        setProjectType(projectType);
        navigate(Path.MOBILE_PROJECT_LIST);
      } else if (project) {
        setProject(project);
        navigate(Path.PROJECT_DETAILS);
      }
    } else {
      if (projectType) {
        setProjectType(projectType);
        navigate(Path.DESKTOP_PROJECT_LIST);
      } else if (project) {
        setProject(project);
        setDesktopShowProjectDetails(true);
      }
    }
  };

  const previewName = projectType
    ? capitalizeFirstLetter(projectType.name)
    : capitalizeFirstLetter(project.name);

  return (
    <section
      className={styles.ProjectPreviewContainer}
      onClick={() => projectClick()}
    >
      <p>{previewName}</p>
      <section className={styles.ProjectPreviewImage}></section>
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    // project: state.project.project,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setProjectType: (projectType: IProjectType) => {
      dispatch(setProjectType(projectType));
    },
    setProject: (project: IProject) => {
      dispatch(setProject(project));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreview);
