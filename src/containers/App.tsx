// BASE MODULES
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// CUSTOM MODULES
import './App.css';
import Header from '../components/Header/Header';
import AppRoutes from './Routes';
import configureStore from '../store/store';
import Footer from '../components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <section className={styles.AppContainer}>
          <Header />

          <AppRoutes />
          <Footer />
        </section>
      </Router>
    </Provider>
  );
}

export default App;
