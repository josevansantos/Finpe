import React, { useState } from 'react';
import { Redirect } from 'react-router';
import api from '../../config';

const CreateUser = () => {
  const [formValues, setFormValue] = useState({});

  const [status, setStatus] = useState({
    type: '',
  });

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
                    <h1 className="mb-5 mt-5">Novo Cadastro</h1>
                    <form onSubmit={addUser}>
                      <div className="form-group mb-3">
                        <label htmlFor="email">Nome usuário</label>
                        <input
                          className="form-control border-0 shadow-sm px-4"
                          id="name"
                          type="text"
                          name="name"
                          autoComplete="off"
                          onChange={handleInputChange}
                          value={formValues.name || ''}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="email" onChange={handleInputChange}>
                          E-mail
                        </label>
                        <input
                          className="form-control border-0 shadow-sm px-4"
                          id="email"
                          type="text"
                          name="email"
                          onChange={handleInputChange}
                          value={formValues.email || ''}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password">Senha</label>
                        <input
                          className="form-control border-0 shadow-sm px-4"
                          id="password"
                          type="password"
                          name="password"
                          onChange={handleInputChange}
                          value={formValues.password || ''}
                        />
                      </div>
                      <button
                        className="btn btn-success btn-lg btn-block rounded"
                        type="submit"
                      >
                        Cadastrar
                      </button>
                      {status.type === 'success' ? (
                        <Redirect
                          to={{
                            pathname: '/',
                          }}
                        />
                      ) : (
                        ''
                      )}
                      <a
                        className="btn btn-info btn-lg btn-block rounded"
                        href="/"
                      >
                        Voltar
                      </a>
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

export default CreateUser;
