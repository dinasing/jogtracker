import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import '../scss/main.scss';
import NavBar from './NavBar';

import { isTokenValid } from './auth';

class App extends React.Component {
  state = {
    isAuthenticated: false,
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

  render() {
    const { isAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <NavBar isAuthenticated={isAuthenticated} />
        <Routes isAuthenticated={isAuthenticated} />
      </BrowserRouter>
    );
  }
}

export default App;
