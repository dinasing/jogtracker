import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default class NavBar extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <header className="navbar">
        <Link className="navbar__home_link" to="/">
          <img className="navbar__logo" src={logo} alt="logobear" />
        </Link>
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
            <li className="navbar__filter_list_item">
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
