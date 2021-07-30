import React from 'react';

const Transaction = ({ transaction }) => {
  return (
    <React.Fragment>
      <transaction.date />
    </React.Fragment>
  );
};

export default Transaction;
