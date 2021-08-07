import './style.css';

import React from 'react';

const UserLogin = () => {
  return (
    <div className="user-login__container">
      <div className="user-login">
        <h1 className="user-login__title">Login</h1>
        <form autoComplete="nope">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            autoComplete="off"
          />
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
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
