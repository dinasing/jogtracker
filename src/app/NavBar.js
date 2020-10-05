import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import filter from '../../assets/images/filter.svg';
import filterActive from '../../assets/images/filter-active.svg';

export default class NavBar extends Component {
  render() {
    const { isAuthenticated, areFiltersOpen } = this.props;

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
              <input
                type="image"
                onClick={this.props.toggleFilters}
                src={areFiltersOpen ? filterActive : filter}
              />
            </li>
          </ul>
        ) : null}
      </header>
    );
  }
}
