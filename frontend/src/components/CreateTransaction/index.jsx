import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../config';

const CreateTransaction = ({ fechaModal }) => {
  const [formValues, setFormValue] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormValue({ ...formValues, [name]: value });
  };

  const addTransaction = async (event) => {
    event.preventDefault();
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    await api.post('/transactions', formValues, headers).then((response) => {});
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="">
          <form onSubmit={addTransaction}>
            <input
              className="form-control m-1"
              type="text"
              name="userId"
              id="user"
              onChange={handleInputChange}
              value={formValues.userId || ''}
            />
            <input
              className="form-control m-1"
              type="date"
              name="date"
              onChange={handleInputChange}
              value={formValues.date || ''}
            />
            <input
              className="form-control m-1"
              type="text"
              name="description"
              placeholder="Descrição"
              onChange={handleInputChange}
              value={formValues.description || ''}
            />
            <input
              className="form-control m-1"
              type="text"
              name="amount"
              placeholder="0,00"
              onChange={handleInputChange}
              value={formValues.amount || ''}
            />
            <div className="form-radio align-items-center">
              <label>
                <input
                  className="m-1"
                  type="radio"
                  name="type"
                  value="expense"
                  onChange={handleInputChange}
                />
              </label>
              Despesa
              <label>
                <input
                  className="m-1"
                  type="radio"
                  name="type"
                  value="income"
                  onChange={handleInputChange}
                />
              </label>
              Receita
            </div>
            <div className="input-group actions">
              <a
                href="/dashboard"
                className="btn btn-danger btn-lg btn-block rounded"
              >
                Cancelar
              </a>
              <Button
                className="btn btn-success btn-lg btn-block rounded"
                type="submit"
                onClick={addTransaction}
              >
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
