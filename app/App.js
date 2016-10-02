import React, { PropTypes as pt } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import weatherAppStore from './store.js';
import weatherAppRoutes from './routes.js';

/**
 * Root Component for the entire app.
 */
export function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        {weatherAppRoutes}
      </Router>
    </Provider>
  );
}
Root.propTypes = {
  store: pt.object.isRequired,
  history: pt.object.isRequired,
};

/**
 * Initialize Redux store, history, and root component.
 */
export function createApp() {
  const store = weatherAppStore();
  const history = syncHistoryWithStore(browserHistory, store);

  return {
    store,
    history,
    rootComponent: (<Root store={store} history={history} />),
  };
}
