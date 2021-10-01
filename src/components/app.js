import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

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
