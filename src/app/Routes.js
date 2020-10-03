import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from './Info';
import JogForm from './JogForm';
import Jogs from './Jogs';
import Login from './Login';
import NothingPage from './NothingPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/new-jog" component={JogForm} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/jogs" component={Jogs} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NothingPage} />
      </Switch>
    );
  }
}

export default Routes;
