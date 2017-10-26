import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../../reducers';
import Routes from '../../components/Routes/Routes';
import './app.scss';

const history = createHistory();
const middleware = [thunk, logger, routerMiddleware(history)];
const store = compose(autoRehydrate())(createStore)(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(...middleware),
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return (<div>Loading...</div>);
    }
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app-container">
            <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
