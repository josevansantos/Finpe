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
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col-sm-20 col-md-7 col-lg-5 mx-auto">
          <div>
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <form onSubmit={loginSubmit}>
                      <div className="form-group mb-3">
                        <label htmlFor="email">E-mail</label>
                        <input
                          className="form-control border-0 shadow-sm px-4"
                          id="email"
                          type="text"
                          name="email"
                          placeholder="Digite seu e-mail"
                          autoComplete="off"
                          onChange={valueInput}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password">Senha</label>
                        <input
                          className="form-control border-0 shadow-sm px-4"
                          id="password"
                          type="password"
                          name="password"
                          autoComplete="on"
                          onChange={valueInput}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block rounded"
                        href="/dashboard"
                      >
                        Login
                      </button>
                      <a
                        href="/create"
                        className="btn btn-primary btn-lg btn-block rounded "
                      >
                        Fazer cadastro
                      </a>
                      {status.type === 'success' ? (
                        <Redirect
                          to={{
                            pathname: '/dashboard',
                          }}
                        />
                      ) : (
                        ''
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
