import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Layout from '../components/Layout'
import Portfolio from '../../portfolio';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <Route path='portfolio' component={Portfolio} />
    </Route>
  </Router>
)
export default Routes
