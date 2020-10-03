import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="*" component={Login} />
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    );
  }
}

export default Routes;
