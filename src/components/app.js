import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ROUTES from '../routes';
import { LOGO_IMAGE } from '../utility/utils/images';

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
