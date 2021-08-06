import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatValue } from '../../helpers/formats';
import { ButtonTable } from '../../styles';

const Transaction = ({ transaction }) => (
  <tr className={transaction.type}>
    <td>{formatDate(transaction.date)}</td>
    <td>{transaction.description}</td>
    <td>{formatValue(transaction.amount)}</td>
    <td>
      <Link to={'/editar/' + transaction.id}>
        <ButtonTable type="button">Editar</ButtonTable>
      </Link>
      <Link to={'/apagar/' + transaction.id}>
        <ButtonTable type="button">Apagar</ButtonTable>
      </Link>
    </td>
  </tr>
);

export default Transaction;
