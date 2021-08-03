import './style.css';

import React from 'react';

const UserLogin = () => {
  return (
    <div className="user-login__container">
      <h1 className="user-login__title">Login</h1>
      <div className="user-login">
        <form autoComplete="nope">
          <div className="user-login__form-control">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" name="email" autoComplete="off" />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" name="password" />
          </div>
          <button type="submit" className="user-login__button" rounded>
            <a href="/app">Entrar</a>
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
