import './style.css';

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
      },
    };
    await api.post('/transactions', formValues, headers).then((response) => {
      console.log('Sucesso', response);
    });
  };

  return (
    <div className="modal-transaction active">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <form onSubmit={addTransaction}>
            <input
              type="text"
              name="userId"
              id="user"
              onChange={handleInputChange}
              value={formValues.userId || ''}
            />
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleInputChange}
              value={formValues.date || ''}
            />
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Descrição"
              onChange={handleInputChange}
              value={formValues.description || ''}
            />
            <input
              type="number"
              step="0.01"
              id="value"
              name="amount"
              placeholder="0,00"
              onChange={handleInputChange}
              value={formValues.amount || ''}
            />
            <div className="form-radio">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  onChange={handleInputChange}
                />
              </label>
              Despesa
              <label>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  onChange={handleInputChange}
                />
              </label>
              Receita
            </div>
            <div className="input-group actions">
              <button onClick={fechaModal} className="button cancel">
                Cancelar
              </button>
              <button
                type="submit"
                // onClick={() => postData()}
                className="button-green"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
