import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import '../scss/main.scss';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
