import React from 'react';
import { Route } from 'react-router-dom';

import HomepageComponent from '../../containers/HomepageComponent/HomepageComponent';

const Routes = () => (
  <div className="app">
    <Route exact path="/" component={HomepageComponent} />
  </div>
);

export default Routes;
