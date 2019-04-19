import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './global-styles';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Trade from './pages/Trade';

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/(register|profile)/" component={Profile} />
    <Route path="/trade" component={Trade} />
  </Router>
);

export default App;
