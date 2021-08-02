import './style.css';
import React from 'react'
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';

const App = () => (
  <React.Fragment>
    <Header />
    <div className='container flex js-center'>
      <Transactions />
    </div>
  </React.Fragment>
);

export default App;
