// BASE MODULES
import { BrowserRouter as Router } from 'react-router-dom';

// CUSTOM MODULES
import './App.css';
import Header from '../components/Header/Header';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <Header />

      <AppRoutes />
    </Router>
  );
}

export default App;
