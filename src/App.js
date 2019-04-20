import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './global-styles';

import Home from './pages/Home';
import Account from './pages/Account';
import Trade from './pages/Trade';

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Account} />
    <Route path="/survivor/:id" component={Account} />
    <Route path="/trade" component={Trade} />
  </Router>
);

export default App;
