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
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    }
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
