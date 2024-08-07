// BASE MODULES
import { Routes, Route } from 'react-router-dom';

// CUSTOM MODULES
import { Path } from '../types';
import AboutMe from './AboutMe/AboutMe';
import MyWork from './MyWork/MyWork';
import Contact from './Contact/Contact';
import ProjectList from './ProjectList/ProjectList';
import { isDesktop } from '../utilities/responsiveness';
import useWindowSize from '../hooks/windowSize';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const AppRoutes = () => {
  const windowSize = useWindowSize();

  return (
    <Routes>
      {isDesktop(windowSize) ? (
        <>
          <Route path={Path.ROOT} element={<AboutMe />} />
          <Route path={Path.ABOUT_ME} element={<AboutMe />} />
          <Route path={Path.MY_WORK} element={<MyWork />} />
          <Route path={Path.CONTACT} element={<Contact />} />
          <Route path={Path.DESKTOP_PROJECT_LIST} element={<ProjectList />} />
        </>
      ) : (
        <>
          <Route
            path={Path.ROOT}
            element={
              <>
                <AboutMe />
                <MyWork />
                <Contact />
              </>
            }
          />
          <Route path={Path.MOBILE_PROJECT_LIST} element={<ProjectList />} />
          <Route path={Path.PROJECT_DETAILS} element={<ProjectDetails />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
