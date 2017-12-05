import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import HomepageComponent from '../../containers/HomepageComponent/HomepageComponent';

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);

const Routes = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={HomepageComponent} />
  </ConnectedSwitch>
);

export default Routes;
