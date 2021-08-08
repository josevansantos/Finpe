import React, { useContext } from 'react';
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';

import { Context } from '../../context/AuthContext';

const Home = () => {
  const { authenticated } = useContext(Context);
  console.log('situaçao usuario', authenticated);
  return (
    <>
      <Header />
      <Transactions />
    </>
  );
};

export default Home;
