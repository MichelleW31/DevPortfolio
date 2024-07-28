// BASE MODULES
import { BrowserRouter as Router } from 'react-router-dom';

// CUSTOM MODULES
import './App.css';
import AboutMe from './AboutMe/AboutMe';
import MyWork from './MyWork/MyWork';
import Contact from './Contact/Contact';
import Header from '../components/Header/Header';
import { isDesktop } from '../utilities/responsiveness';
import useWindowSize from '../hooks/windowSize';
import AppRoutes from './Routes';

function App() {
  const windowSize = useWindowSize();

  return (
    <Router>
      <Header />
      {isDesktop(windowSize) ? (
        <AppRoutes />
      ) : (
        <>
          <AboutMe />
          <MyWork />
          <Contact />
        </>
      )}
    </Router>
  );
}

export default App;
