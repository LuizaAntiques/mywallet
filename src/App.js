import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Wallet } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/mywallet" exact component={ Login } />
      <Route path="/mywallet/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
