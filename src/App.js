import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './global-styles';

import Home from './pages/Home';
import Register from './pages/Register';
import Trade from './pages/Trade';

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/account" component={Register} />
    <Route path="/trade" component={Trade} />
  </Router>
);

export default App;
