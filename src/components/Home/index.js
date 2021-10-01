import React, { useEffect } from 'react';
import Menu from '../Menu';

const Home = () => {
  useEffect(() => {
    document.title = 'Homepage | DCT';
  }, []);

  return (
    <>
      <Menu />
      <div>Home component</div>
      <div>
        <img src="images/deliveryLogo.png" width={50} alt="Logo" />
      </div>
    </>
  );
};

Home.displayName = 'Home';

export default Home;
