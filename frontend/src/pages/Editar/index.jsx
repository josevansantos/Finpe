import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../config';

const Editar = (props) => {
  const [id] = useState(props.match.params.id);
  const [data, setData] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const editTransaction = async (event) => {
    event.preventDefault();
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await api
      .put(`transactions/${id}`, { description, amount }, headers)
      .then((response) => {
        console.log('response:', response);
      });
  };

  useEffect(() => {
    const getTransaction = async () => {
      api.get(`transactions/${id}`).then((response) => setData(response.data));
    };
    getTransaction();
  }, [id]);

  return (
    <>
      <h1> Editar</h1>
      <form onSubmit={editTransaction}>
        <label>Data</label>
        <input
          type="date"
          name="date"
          id="date"
          value={data.date}
          onChange={handleInputChange}
        />
        <label>Descrição</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Descrição"
          value={data.description}
          onChange={handleInputChange}
        />
        <label>Valor</label>
        <input
          type="number"
          step="0.01"
          id="value"
          name="amount"
          placeholder="0,00"
          value={data.amount}
          onChange={handleInputChange}
        />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
};

export default Editar;
