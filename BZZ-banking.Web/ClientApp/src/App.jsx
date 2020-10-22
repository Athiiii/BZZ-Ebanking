import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Foodmarket } from './components/demo/Foodmarket';
import { FmLogin } from './components/demo/FmLogin';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login} />
          <Route exact path='/demo' component={Foodmarket} />
          <Route exact path='/demo/login' component={FmLogin} />
          <Route exact path='/demo/dashboard' component={Foodmarket} />
        </Layout>
      </div>
    );
  }
}
