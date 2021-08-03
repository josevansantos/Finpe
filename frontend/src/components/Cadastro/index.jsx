import './style.css';

import React from 'react';

const CreateUser = () => {
  return (
    <div className="user-login">
      <h1 className="create-user__title">Cadastrar Usuário</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">Nome</label>
          <input id="name" type="text" name="name" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Confirmar senha</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button button-green"
          rounded
        >
          <a href="/app">Cadastrar</a>
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
