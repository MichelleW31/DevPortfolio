// BASE MODULES
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM MODULES
import './App.css';
import Header from '../components/Header/Header';
import AppRoutes from './Routes';
import Footer from '../components/Footer/Footer';
import styles from './App.module.scss';
import { store, persistor } from '../store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <section className={styles.AppContainer}>
            <Header />

            <AppRoutes />
            <Footer />
          </section>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
