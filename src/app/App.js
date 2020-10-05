import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import '../scss/main.scss';
import NavBar from './NavBar';

import { isTokenValid } from './auth';

class App extends React.Component {
  state = {
    isAuthenticated: false,
    areFiltersOpen: false,
  };

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    const token = localStorage.getItem('token');
    let isAuthenticated = false;
    if (token) {
      isAuthenticated = await isTokenValid();
    }
    this.setState({ isAuthenticated });
  };

  toggleFilters = () => {
    this.setState(prevState => ({
      areFiltersOpen: !prevState.areFiltersOpen,
    }));
  };

  render() {
    const { isAuthenticated, areFiltersOpen } = this.state;

    return (
      <BrowserRouter>
        <NavBar
          isAuthenticated={isAuthenticated}
          areFiltersOpen={areFiltersOpen}
          toggleFilters={this.toggleFilters}
        />
        <Routes isAuthenticated={isAuthenticated} areFiltersOpen={areFiltersOpen} />
      </BrowserRouter>
    );
  }
}

export default App;
