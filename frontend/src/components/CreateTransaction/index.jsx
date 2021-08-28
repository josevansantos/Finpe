import React, { useState } from 'react';
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
    window.location = '/dashboard';
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="d-flex align-items-center py-5">
          <form onSubmit={addTransaction}>
            {/* <input
              placeholder="ID do usuário"
              className="form-control m-1"
              type="text"
              name="userId"
              id="user"
              onChange={handleInputChange}
              value={formValues.userId || ''}
            /> */}
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
            <div className="custom-control custom-radio">
              <label className="m-1 align-items-center">
                <input
                  className="m-1 align-items-center"
                  type="radio"
                  name="type"
                  value="expense"
                  onChange={handleInputChange}
                />
              </label>
              Despesa
              <label className="m-1 align-items-center">
                <input
                  className="m-1 align-items-center"
                  type="radio"
                  name="type"
                  value="income"
                  onChange={handleInputChange}
                />
              </label>
              Receita
            </div>
            <div className="input-group actions">
              {/* <button
                type="submit"
                className="btn btn-danger btn-lg btn-block rounded"
              >
                Cancelar
              </button> */}
              <button
                className="btn btn-success btn-lg btn-block rounded"
                type="submit"
              >
                Salvar
              </button>
              <a
                className="btn btn-info btn-lg btn-block rounded"
                href="/transaction/create"
              >
                Voltar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
