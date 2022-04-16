import React from 'react';
import Menu from '../Menu';

const Home = () => (
  <>
    <Menu />
    <div>Home component</div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </>
);

Home.displayName = 'Home';

export default Home;
