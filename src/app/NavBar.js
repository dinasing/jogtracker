import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
// import filter from '../../assets/images/filter.svg';

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
              <NavLink className="navbar__link" activeClassName="navbar__link-active" to="/jogs">
                jogs
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" activeClassName="navbar__link-active" to="/info">
                info
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link-active"
                to="/contacts"
              >
                contact us
              </NavLink>
            </li>
            <li className="navbar__filter-list-item">
              <NavLink
                activeClassName="navbar__filter-active"
                className="navbar__filter"
                to="/filter"
              />
            </li>
          </ul>
        ) : null}
      </header>
    );
  }
}
