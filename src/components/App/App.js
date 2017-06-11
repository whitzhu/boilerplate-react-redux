import React from 'react';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from '../../reducers';

require('./app.scss');

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>Welcome to Project</h1>
    </div>
  </Provider>
);

export default App;
