import React from 'react';

import Transaction from '../Transaction';

const Transactions = ({ transactions }) => {
  return (
    <React.Fragment>
    { transactions.map((transaction, index) => (
        <Transaction transaction={transaction} />
    ))}
  </React.Fragment>
  );
};

export default Transactions;
