// BASE MODULES
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// CUSTOM MODULES
import './App.css';
import Header from '../components/Header/Header';
import AppRoutes from './Routes';
import configureStore from '../store/store';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <Header />

        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
