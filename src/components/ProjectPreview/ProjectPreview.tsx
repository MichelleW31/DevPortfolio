// BASE MODULES
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IProject, IProjectType, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { setProject, setProjectType } from '../../store/actions/projectActions';
import styles from './ProjectPreview.module.scss';
import { setDefaultProject } from '../../utilities/setProject';

interface ProjectPreviewProps {
  projectType?: IProjectType;
  project?: IProject;
  setProjectType: (projectType: IProjectType) => void;
  setProject: (project: IProject) => void;
  setDesktopShowProjectDetails?: (isTrue: boolean) => void;
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
    // MOBILE
    if (!isDesktop(windowSize)) {
      if (projectType) {
        setProjectType(projectType);
        navigate(Path.MOBILE_PROJECT_LIST);
      } else if (project) {
        setProject(project);
        navigate(Path.PROJECT_DETAILS);
      }
      // DESKTOP
    } else {
      if (projectType) {
        const defaultProject = setDefaultProject(projectType);
        setProjectType(projectType);
        // set default project to be the first project and display the desktop details
        setProject(defaultProject);
        navigate(Path.DESKTOP_PROJECT_LIST);
      } else if (project) {
        setProject(project);
        if (setDesktopShowProjectDetails) {
          setDesktopShowProjectDetails(true);
        }
      }
    }
  };

  const previewName = projectType
    ? capitalizeFirstLetter(projectType.name)
    : project && capitalizeFirstLetter(project.name);

  return (
    <section className={styles.ProjectPreviewContainer}>
      <section className={styles.ProjectPreview} onClick={() => projectClick()}>
        <p className={styles.PreviewName}>{previewName}</p>
      </section>

      {/* {addBar()} */}
    </section>
  );
};

const mapStateToProps = () => {
  return {
    // projectSelected: state.project.project,
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
