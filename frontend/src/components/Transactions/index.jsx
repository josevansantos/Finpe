// import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../config';

import { ButtonTable, Table } from '../../styles';
import { formatDate, formatValue } from '../../helpers/formats';
import { Link } from 'react-router-dom';

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

  const deleteTransaction = async (id) => {
    await api.delete(`transactions/${id}`).then((response) => {
      console.log(response);
    });
    listTransactions();
  };

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
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={transaction.type}>
              <td>{formatDate(transaction.date)}</td>
              <td>{transaction.description}</td>
              <td>{formatValue(transaction.amount)}</td>
              <td>
                <Link to={'/editar/' + transaction.id}>
                  <ButtonTable type="button">Editar</ButtonTable>
                </Link>
                <Link to={'/apagar/' + transaction.id}>
                  <ButtonTable
                    type="button"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    Apagar
                  </ButtonTable>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Transactions;
