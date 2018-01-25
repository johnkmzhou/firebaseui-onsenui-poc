import React from 'react';
import { Page, Button } from 'react-onsenui';

import LoginPage from './LoginPage';

const SettingsPage = props => {
  const pushLoginPage = event => props.navigator.pushPage({ component: LoginPage, props: { key: 'login' } });

  return (
    <Page>
      <h1>Settings Page</h1>
      <Button onClick={pushLoginPage}>Login</Button>
    </Page>
  );
}

export default SettingsPage;