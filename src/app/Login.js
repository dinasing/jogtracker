import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from './auth';

const { uuid } = process.env;

export default class Login extends Component {
  handleLogin = () => {
    getToken(uuid);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <button onClick={this.handleLogin} className="login__button">
            Let me in
          </button>
        </div>
      </div>
    );
  }
}
