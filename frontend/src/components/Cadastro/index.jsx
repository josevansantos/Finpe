// import './style.css';
import React, { useState } from 'react';
import api from '../../config';

const CreateUser = () => {
  const [formValues, setFormValue] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormValue({ ...formValues, [name]: value });
  };

  const addUser = async (event) => {
    event.preventDefault();
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    await api.post('/users', formValues, headers).then((response) => {
      console.log('Sucesso', response);
    });
  };

  return (
    <div>
      <h1>Cadastrar Usuário</h1>
      <form onSubmit={addUser}>
        <label htmlFor="email">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={formValues.name || ''}
        />
        <label htmlFor="email" onChange={handleInputChange}>
          E-mail
        </label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={formValues.email || ''}
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleInputChange}
          value={formValues.password || ''}
        />
        <label htmlFor="password">Confirmar senha</label>
        {/* <input
          id="confirm-password"
          type="password"
          name="confirm-password"
          onChange={handleInputChange}
        /> */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateUser;
