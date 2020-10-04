import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Info from './Info';
import JogForm from './JogForm';
import Jogs from './Jogs';
import Login from './Login';
import NothingPage from './NothingPage';
import { ProtectedRoute } from './ProtectedRoute';

class Routes extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Switch>
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/new-jog"
          component={JogForm}
        />
        <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/info" component={Info} />
        <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/jogs" component={Jogs} />
        <Route
          exact
          path="/"
          render={() => (isAuthenticated ? <Redirect to="/jogs" /> : <Login />)}
        />

        <Route isAuthenticated={isAuthenticated} path="/*" component={NothingPage} />
      </Switch>
    );
  }
}

export default Routes;
