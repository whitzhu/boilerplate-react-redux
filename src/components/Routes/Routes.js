import React from 'react';
import { Route } from 'react-router-dom';

import DashboardComponent from '../../containers/DashboardComponent/DashboardComponent';

const Routes = () => (
  <div className="app">
    <Route exact path="/" component={DashboardComponent} />
  </div>
);

export default Routes;
