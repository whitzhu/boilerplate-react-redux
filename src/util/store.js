import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const config = {
  key: 'root',
  storage,
};

export const history = createHistory();
const middleware = [thunk, logger, routerMiddleware(history)];
const reducer = persistCombineReducers(config, reducers);
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default {
  history,
  store,
  persistor,
};
