import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import filter from '../../assets/images/filter.svg';

export default class NavBar extends Component {
  state = {
    isAuthenticated: true,
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <header className="navbar">
        <img className="navbar__logo" src={logo} alt="logobear" />
        {isAuthenticated ? (
          <ul>
            <li>
              <a href="/#">jogs</a>
            </li>
            <li>
              <a href="/info">info</a>
            </li>
            <li>
              <a href="/contacts">contact us</a>
            </li>
            <li>
              <a href="/filter">
                <img src={filter} alt="filter" className="navbar__filter" />
              </a>
            </li>
          </ul>
        ) : null}
      </header>
    );
  }
}
