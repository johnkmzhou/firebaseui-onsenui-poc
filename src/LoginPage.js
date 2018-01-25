import React from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';
import { FirebaseAuth } from 'react-firebaseui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { createUserProfile } from './actions';

const LoginPage = props => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="left"><BackButton>Back</BackButton></div>
    </Toolbar>;

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
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={props.firebase.auth()} />
    </Page>
  );
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }), { createUserProfile })
)(LoginPage);