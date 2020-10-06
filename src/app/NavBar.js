import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import filter from '../../assets/images/filter.svg';
import filterActive from '../../assets/images/filter-active.svg';
import menuIcon from '../../assets/images/menu.png';
import cancelIcon from '../../assets/images/cancel-menu.svg';
import logoMobile from '../../assets/images/logoMobile.png';

export default class NavBar extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isAuthenticated, areFiltersOpen } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <header className={isMenuOpen ? 'navbar navbar-open' : 'navbar'}>
        <Link className="navbar__home_link" to="/">
          <img className="navbar__logo" src={isMenuOpen ? logoMobile : logo} alt="logobear" />
        </Link>
        {isAuthenticated ? (
          <div className="navbar__nav">
            <ul className={isMenuOpen ? 'navbar__links-open' : ''}>
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
            </ul>
            <div className="navbar__filter_list_item">
              <input
                type="image"
                onClick={this.props.toggleFilters}
                src={areFiltersOpen ? filterActive : filter}
              />
            </div>
            <div className="navbar__menu_icon">
              <input
                type="image"
                onClick={this.toggleMenu}
                src={isMenuOpen ? cancelIcon : menuIcon}
                width="24px"
              />
            </div>
          </div>
        ) : null}
      </header>
    );
  }
}
