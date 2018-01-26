import React from 'react';
import { Page } from 'react-onsenui';
import { FirebaseAuth } from 'react-firebaseui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { createUserProfile } from './actions';

const LoginPage = props => {
  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: currentUser => {
        console.log(currentUser);
        return false;
      }
    }
  };

  return (
    <Page>
      <h1>Login Page</h1>
      {props.firebaseAuthMounted ?
        <FirebaseAuth elementId="auth_2" uiConfig={uiConfig} firebaseAuth={props.firebase.auth()} />
        : null}
      <pre>{JSON.stringify(props.auth, null, 2)}</pre>
    </Page>
  );
}

function mapStateToProps({ firebase: { auth }, authReducer: { firebaseAuthMounted } }) {
  return { auth, firebaseAuthMounted };
}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, { createUserProfile })
)(LoginPage);