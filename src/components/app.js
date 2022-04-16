import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ROUTES from '../routes';
import { LOGO_IMAGE } from '../utils/images';

import '../style/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
