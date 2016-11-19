import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

const Routes = () => (
  <Router history={hashHistory}>
  </Router>
)
/*
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/resume' component={Resume} />
    <Route path='/contact' component={Contact} />
*/
module.exports = Routes
