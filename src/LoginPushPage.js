import React from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';
import { FirebaseAuth } from 'react-firebaseui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { createUserProfile } from './actions';
import { destroyFirebaseAuth } from './actions';

const LoginPushPage = props => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="left"><BackButton onClick={back}>Back</BackButton></div>
    </Toolbar>;

  const back = () => {
    props.destroyFirebaseAuth();
    props.navigator.popPage();
  };

  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: currentUser => {
        props.createUserProfile(currentUser);
        console.log(currentUser);
        return false;
      }
    }
  };

  return (
    <Page renderToolbar={renderToolbar}>
      <h1>Login Push Page</h1>
      <FirebaseAuth elementId="auth_1" uiConfig={uiConfig} firebaseAuth={props.firebase.auth()} />
    </Page>
  );
}

const mapDispatchToProps = dispatch => {
  return { createUserProfile, destroyFirebaseAuth: () => dispatch(destroyFirebaseAuth()) };
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }), mapDispatchToProps)
)(LoginPushPage);