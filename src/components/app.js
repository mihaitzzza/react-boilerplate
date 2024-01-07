import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

import '../style/app.scss';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about-us" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
