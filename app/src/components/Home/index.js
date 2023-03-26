import React from 'react';
import Menu from '../Menu';

const Home = () => {
  return (
    <>
      <Menu />
      <div className="text-3xl font-bold underline">Home component</div>
      <div>
        <img src="images/deliveryLogo.png" width={50} alt="Logo" />
      </div>
    </>
  );
};

Home.displayName = 'Home';

export default Home;
