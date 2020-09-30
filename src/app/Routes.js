import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    );
  }
}

export default Routes;
