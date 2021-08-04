import './style.css';
import React from 'react';

const formatDate = (date) => {
  const newDate = new Date(date);
  // corrigindo UTC
  newDate.setHours(newDate.getHours() + newDate.getTimezoneOffset() / 60);

  const formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(newDate);
};

const formatValue = (value) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
};

const Transaction = ({ transaction }) => (
  <tr className={transaction.type}>
    <td>{formatDate(transaction.date)}</td>
    <td>{transaction.description}</td>
    <td>{formatValue(transaction.value)}</td>
    <td>{transaction.type}</td>
  </tr>
);

export default Transaction;
