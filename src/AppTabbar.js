import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import LoginPage from './LoginPage';
import { createFirebaseAuth } from './actions';

const AppTabbar = props => {
  const renderTabs = navigator => [
    {
      content: <HomePage key="home" navigator={props.navigator} />,
      tab: <Tab key="home" label="Home" icon="md-home" />
    },
    {
      content: <SettingsPage key="settings" navigator={props.navigator} />,
      tab: <Tab key="settings" label="Settings" icon="md-settings" />
    },
    {
      content: <LoginPage key="login" navigator={props.navigator} />,
      tab: <Tab key="login" label="Login" icon="md-account" onClick={props.createFirebaseAuth} />
    }
  ];

  return (
    <Page>
      <Tabbar position='bottom' index={0} renderTabs={renderTabs} />
    </Page>
  );
};

const mapDispatchToProps = dispatch => {
  return { createFirebaseAuth: () => dispatch(createFirebaseAuth()) };
}

export default connect(null, mapDispatchToProps)(AppTabbar);