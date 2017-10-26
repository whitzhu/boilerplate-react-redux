import React from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducer from '../../reducers';
import Routes from '../../components/Routes/Routes';
import './app.scss';

const middlewares = [thunk, logger];
const store = createStore(
  reducer,
  applyMiddleware(middlewares),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app-container">
        <Routes />
      </div>
    </Router>
  </Provider>
);

export default App;
