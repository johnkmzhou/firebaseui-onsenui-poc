import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { createInitialStore } from './configureStore';

ReactDOM.render(
  <Provider store={createInitialStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
