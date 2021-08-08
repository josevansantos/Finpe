import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../config';

const EditTransaction = (props) => {
  const [id] = useState(props.match.params.id);
  const [formValues, setFormValue] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormValue({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const getTransaction = async () => {
      const headers = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      await api.get(`transactions/${id}`, headers).then((response) => {
        setFormValue(response.data);
      });
    };
    getTransaction();
  }, [id]);

  const editTransaction = async (event) => {
    event.preventDefault();
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    await api
      .put(`transactions/${id}`, formValues, headers)
      .then((response) => {
        console.log('response:', response);
      });
  };

  return (
    <>
      <h1> Editar</h1>
      <form onSubmit={editTransaction}>
        <input
          type="text"
          name="userId"
          id="user"
          onChange={handleInputChange}
          value={formValues.userId || ''}
        />
        <input type="date" name="date" id="date" onChange={handleInputChange} />
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
          <button type="button" className="button cancel">
            Cancelar
          </button>
          <button type="submit" className="button-green">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};

export default EditTransaction;
