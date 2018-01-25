import React from 'react';

import { Page, Toolbar, BackButton } from 'react-onsenui';

export const LoginPage = props => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="left"><BackButton>Back</BackButton></div>
    </Toolbar>;

  return (
    <Page renderToolbar={renderToolbar}>
    </Page>
  );
}