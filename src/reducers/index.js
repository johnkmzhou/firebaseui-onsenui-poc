import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// Add firebase to reducers
export const rootReducer = combineReducers({
  firebase: firebaseReducer
});