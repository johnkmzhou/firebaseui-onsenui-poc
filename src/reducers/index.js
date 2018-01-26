import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const authReducer = (state = { firebaseAuthMounted: false }, action) => {
  switch (action.type) {
    case 'CREATE_FIREBASEAUTH':
      return { firebaseAuthMounted: true };
    case 'DESTROY_FIREBASEAUTH':
    return { firebaseAuthMounted: false };
    default:
      return state;
  }
};

// Add firebase to reducers
export const rootReducer = combineReducers({
  authReducer,
  firebase: firebaseReducer
});