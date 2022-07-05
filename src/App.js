import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Wallet from './pages/Wallet/Wallet';
import Login from './pages/Login/Login';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    font-family: sans-serif;
    margin: 0px;
  }
`;

class App extends Component {
  render() {
    return (
      <main>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}

export default App;
