import React, { useEffect } from 'react';
import Menu from '../Menu';
import { LOGO_IMAGE } from '../../utility/utils/images';

const Home = () => {
  useEffect(() => {
    document.title = 'Homepage | DCT';
  }, []);

  console.log('LOGO_IMAGE', LOGO_IMAGE);

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
