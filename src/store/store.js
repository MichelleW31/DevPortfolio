// BASE MODULES
import { legacy_createStore as createStore, combineReducers } from 'redux';

// CUSTOM MODULES
import projectReducer from './reducers/projectReducer';

const rootReducer = combineReducers({
  project: projectReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
