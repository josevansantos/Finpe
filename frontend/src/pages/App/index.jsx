import './style.css';
import React from 'react'
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';
import UserLogin from '../Login';

const App = () => (
  <React.Fragment>
    <UserLogin />
    <Header />
    <div className='container flex js-center'>
      <Transactions />
    </div>
  </React.Fragment>
);

export default App;
