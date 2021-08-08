// import './style.css';

import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../config';

import { Context } from '../../context/AuthContext';

const UserLogin = () => {
  const { singIn } = useContext(Context);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [status, setStatus] = useState({
    type: '',
  });

  const valueInput = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const loginSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await api.post('/login', user, headers).then((response) => {
      localStorage.setItem('token', response.data.token);
      singIn(true);
      setStatus({ type: 'success' });
    });
  };

  return (
    <div className="user-login__container">
      <div className="user-login">
        <h1 className="user-login__title">Login</h1>

        {status.type === 'success' ? (
          <Redirect
            to={{
              pathname: '/dashboard',
            }}
          />
        ) : (
          '/login'
        )}

        <form onSubmit={loginSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            autoComplete="off"
            onChange={valueInput}
          />
          <br />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="on"
            onChange={valueInput}
          />
          <button type="submit" className="user-login__button" rounded>
            <a href="/dashboard">Entrar</a>
          </button>
          <a className="user-login__link" href="/create">
            Fazer cadastro
          </a>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
