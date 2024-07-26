// BASE MODULES
import { Router, Routes, Route } from 'react-router-dom';

// CUSTOM MODULES
import { Path } from '../types';
import AboutMe from './AboutMe/AboutMe';
import MyWork from './MyWork/MyWork';
import Contact from './Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Path.ROOT} element={<AboutMe />} />
      <Route path={Path.ABOUT_ME} element={<AboutMe />} />
      <Route path={Path.MY_WORK} element={<MyWork />} />
      <Route path={Path.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
