import firebase from 'firebase';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import { config } from './firebase.config';
import { rootReducer } from './reducers';

// react-redux-firebase options
export const reduxConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  attachAuthIsReady: true, // attaches auth is ready promise to store
  updateProfileOnLogin: true
};

export const createInitialStore = (initialState = {}) => {
  // Initialize Firebase instance
  firebase.initializeApp(config);

  // Add redux Firebase to compose
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reduxConfig),
    applyMiddleware(thunk.withExtraArgument(getFirebase))
  )(createStore);

  // Create store with reducers and initial state
  const store = createStoreWithFirebase(rootReducer, initialState);

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  store.firebaseAuthIsReady.then(() => {
    console.log('Auth has loaded'); // eslint-disable-line no-console
  });

  return store;
};