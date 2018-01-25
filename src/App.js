import React from 'react';
import { Navigator } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import AppTabbar from './AppTabbar';

class App extends React.Component {
  renderPage = (route, navigator) => {
    route.props = route.props || {};
    route.props.navigator = navigator;
    return <route.component {...route.props} />;
  };

  render() {
    return (
      <Navigator initialRoute={{ component: AppTabbar, props: { key: 'appTabbar' } }}
        renderPage={this.renderPage} />
    );
  }
}

export default App;
