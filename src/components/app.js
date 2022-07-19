import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'components/About';
import Home from 'components/Home';

import './app.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about-us">
        <About />
      </Route>
    </Switch>
  );
};

export default App;
