// BASE MODULES
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IProject, IProjectType, IState, Path } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { capitalizeFirstLetter } from '../../utilities/formatting';
import { setProject, setProjectType } from '../../store/actions/projectActions';
import styles from './ProjectPreview.module.scss';
import { setDefaultProject } from '../../utilities/setProject';
import ActiveBar from '../ActiveBar/ActiveBar';

interface ProjectPreviewProps {
  projectType?: IProjectType;
  project?: IProject;
  projectSelected: IProject;
  setProjectType: (projectType: IProjectType) => void;
  setProject: (project: IProject) => void;
  setDesktopShowProjectDetails?: (isTrue: boolean) => void;
}

const ProjectPreview = ({
  projectType,
  project,
  projectSelected,
  setProjectType,
  setProject,
  setDesktopShowProjectDetails,
}: ProjectPreviewProps) => {
  const windowSize = useWindowSize();
  const [selectedProjectName, setSelectedProjectName] = useState<string>(
    projectSelected.name
  );

  // console.log('selectedProjectName', selectedProjectName);
  // console.log('projectSelected', projectSelected);

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
        setSelectedProjectName(project.name);
      }
    }
  };

  // const addBar = () => {
  //   if (project) {
  //     if (
  //       isDesktop(windowSize) &&
  //       projectSelected.name === selectedProjectName
  //     ) {
  //       console.log('hit');
  //       return <ActiveBar />;
  //     } else {
  //       console.log('not hit');
  //       console.log(
  //         isDesktop(windowSize) && projectSelected.name === selectedProjectName
  //       );
  //       console.log('selectedProjectName', selectedProjectName);
  //       console.log('projectSelected', projectSelected);
  //       return null;
  //     }
  //   }
  // };

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

const mapStateToProps = (state: IState) => {
  return {
    projectSelected: state.project.project,
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
