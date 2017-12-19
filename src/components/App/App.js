import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from 'react-router-redux';
import { history, store, persistor } from '../../util/store';

import Routes from '../../components/Routes/Routes';
import './app.scss';

const Loading = () => (
  <div>Loading...</div>
);

const onBeforeLift = () => {
  console.log("onBeforeLift");
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <ConnectedRouter history={history}>
            <div className="app-container">
              <Routes />
            </div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
