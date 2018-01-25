import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import { HomePage } from './HomePage';
import { SettingsPage } from './SettingsPage';

export const AppTabbar = props => {
  const renderTabs = navigator => [
    {
      content: <HomePage key="home" navigator={props.navigator} />,
      tab: <Tab key="home" label="Home" icon="md-home" />
    },
    {
      content: <SettingsPage key="settings" navigator={props.navigator} />,
      tab: <Tab key="settings" label="Settings" icon="md-settings" />
    }
  ];

  return (
    <Page>
      <Tabbar position='bottom' index={0} renderTabs={renderTabs} />
    </Page>
  );
};
