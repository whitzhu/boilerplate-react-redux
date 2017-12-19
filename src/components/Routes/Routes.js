import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import HomepageComponent from '../../containers/HomepageComponent/HomepageComponent';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomepageComponent} />
  </Switch>
);

export default withRouter(connect(null)(Routes));
