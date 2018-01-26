import React from 'react';
import { Page, Button } from 'react-onsenui';

import LoginPushPage from './LoginPushPage';

const SettingsPage = props => {
  const pushLoginPage = () => props.navigator.pushPage({ component: LoginPushPage, props: { key: 'loginpush' } });

  return (
    <Page>
      <h1>Settings Page</h1>
      <Button onClick={pushLoginPage}>Login</Button>
    </Page>
  );
}

export default SettingsPage;