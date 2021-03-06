import React, { Component } from 'react';
import { getToken } from './auth';

const uuid = 'hello';

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
