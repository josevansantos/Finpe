// import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../config';

import Transaction from '../Transaction';
import { Table } from '../../styles';
import { formatValue } from '../../helpers/formats';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const listTransactions = async () => {
    await api
      .get(`transactions`)
      .then((response) => setTransactions(response.data))
      .catch((err) => {
        console.error(err.response);
      });
  };
  useEffect(() => {
    listTransactions();
  }, []);

  const getExpense = ({ type }) => type === 'expense';
  const expense = transactions.filter(getExpense);
  const newExpense = expense.reduce((acc, { amount }) => acc + amount, 0);

  const getIncome = ({ type }) => type === 'income';
  const income = transactions.filter(getIncome);
  const newIncome = income.reduce((acc, { amount }) => acc + amount, 0);

  return (
    <>
      <div className="balance">
        <div className="card entrada">
          <h3>Entradas</h3>
          <p id="incomeDisplay">{formatValue(newIncome)}</p>
        </div>

        <div className="card saida">
          <h3>Saídas</h3>
          <p id="expenseDisplay">{formatValue(newExpense)}</p>
        </div>

        <div className="card total">
          <h3>Total</h3>
          <p id="totalDisplay">{formatValue(newIncome - newExpense)}</p>
        </div>
      </div>
      <Table>
        <thead>
          <th>Data</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Opções</th>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <Transaction
              key={index}
              transaction={transaction}
              className={transaction.type}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Transactions;
