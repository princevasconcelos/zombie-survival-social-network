import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Trade from './pages/Trade';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/new" component={Profile} />
    <Route path="/trade" component={Trade} />
  </Router>
);

export default App;
