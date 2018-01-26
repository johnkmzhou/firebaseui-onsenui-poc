import firebase from 'firebase';
import { actionTypes } from 'react-redux-firebase';

import { reduxConfig } from '../configureStore';

export const createFirebaseAuth = () => {
  return {
    type: 'CREATE_FIREBASEAUTH'
  }
}

export const destroyFirebaseAuth = () => {
  return {
    type: 'DESTROY_FIREBASEAUTH'
  }
}

// recreating code from react-redux-firebase
export const createUserProfile = currentUser => {
  const profile = {
    email: currentUser.email,
    displayName: currentUser.providerData[0].displayName || currentUser.email,
    avatarUrl: currentUser.providerData[0].photoURL,
    providerData: currentUser.providerData
  }

  const populateUsers = () => {
    return firebase.ref(`${reduxConfig.userProfile}/${currentUser.uid}`).once('value')
      .then(profileSnap => {
        !reduxConfig.updateProfileOnLogin && profileSnap.val() !== null
          ? profileSnap.val()
          : profileSnap.ref.update(profile).then(() => profile);
      })
      .catch(err => console.log(err));
  };

  return dispatch => {
    populateUsers()
      .then(profile => {
        dispatch({
          type: actionTypes.SET_PROFILE,
          profile: profile
        });
      });
  }
};