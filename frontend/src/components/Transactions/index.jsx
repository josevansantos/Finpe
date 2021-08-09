import React, { useEffect, useState } from 'react';

import { formatDate, formatValue } from '../../helpers/formats';
import { Link } from 'react-router-dom';
import { getAll, remove } from '../../services/transactions';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const listTransactions = async () => {
    getAll()
      .then(setTransactions)
      .catch((err) => {
        console.error(err.response);
      });
  };

  const deleteTransaction = async (id) => {
    await remove(id);
    listTransactions();
  };

  const getExpense = ({ type }) => type === 'expense';
  const expense = transactions.filter(getExpense);
  const newExpense = expense.reduce((acc, { amount }) => acc + amount, 0);

  const getIncome = ({ type }) => type === 'income';
  const income = transactions.filter(getIncome);
  const newIncome = income.reduce((acc, { amount }) => acc + amount, 0);

  useEffect(() => {
    listTransactions();
  }, []);

  return (
    <>
      <div className="">
        <div className=" d-flex flex-row justify-content-between">
          <div className="card-body bg-success mt-1 mb-5 ml-4 mr-2 rounded">
            <h2 className="text-white text-uppercase align-content-center">
              Entradas
            </h2>
            <h4
              className="text-white text-uppercase align-content-center"
              id="incomeDisplay"
            >
              {formatValue(newIncome)}
            </h4>
          </div>
          <div className="card-body bg-danger mt-1 mb-5 ml-2 mr-2 rounded">
            <h2 className="text-white text-uppercase">Saídas</h2>
            <h4 className="text-white text-uppercase" id="expenseDisplay">
              {formatValue(newExpense)}
            </h4>
          </div>

          <div className="card-body bg-info mt-1 mb-5 ml-2 mr-4 rounded">
            <h2 className="text-white text-uppercase ">Total</h2>
            <h4 className="text-white text-uppercase" id="totalDisplay">
              {formatValue(newIncome - newExpense)}
            </h4>
          </div>
        </div>
      </div>

      <a className="btn btn-success btn-lg rounded ml-5" href="/transaction">
        Nova Transação
      </a>

      <div className="justify-content-between d-xl-flex m-4 align-content-center">
        <table className="table table-hover align-content-center">
          <thead className="bg-secondary text-white align-content-center">
            <tr className="align-content-center">
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className={
                  transaction.type === 'income'
                    ? 'table-success text-black justify-content-center'
                    : 'table-danger text-black justify-content-center'
                }
              >
                <td className="pt-3 mb-0">{formatDate(transaction.date)}</td>
                <td className="pt-3 mb-0">{transaction.description}</td>
                <td className="pt-3 mb-0">{formatValue(transaction.amount)}</td>
                <td>
                  <Link to={'/editar/' + transaction.id}>
                    <button
                      className="btn btn-secondary justify-content-center"
                      type="button"
                    >
                      Editar
                    </button>
                  </Link>{' '}
                  <button
                    type="button"
                    className="btn btn-danger btn-secondary justify-content-center ml-5"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Transactions };
