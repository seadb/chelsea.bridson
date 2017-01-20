import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from '../components/Layout'
import Portfolio from '../../portfolio'
import Resume from '../../resume'
import Contact from '../../contact'
import Home from '../../home'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Home} />
      <Route path='portfolio' component={Portfolio} />
      <Route path='resume' component={Resume} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
)
export default Routes
