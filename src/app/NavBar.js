import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink activeClassName="navbar__link-active" to="/jogs">
                jogs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="navbar__link-active" to="/info">
                info
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="navbar__link-active" to="/contacts">
                contact us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="navbar__link-active" to="/filter">
                <img src={filter} alt="filter" className="navbar__filter" />
              </NavLink>
            </li>
          </ul>
        ) : null}
      </header>
    );
  }
}
