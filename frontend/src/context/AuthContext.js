import React, { createContext, useEffect, useState } from 'react';
import api from '../config';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLogin = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }
      setLoading(false);
    };

    getLogin();
  }, []);
  if (loading) {
    return <h1>Carregando</h1>;
  }

  const validaUser = async () => {
    const valueToken = localStorage.getItem('token');

    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + valueToken,
      },
    };

    api
      .get('/login/token', headers)
      .then((response) => {
        return true;
      })
      .catch(() => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        return false;
      });
  };

  function singIn(sit) {
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  return (
    <Context.Provider
      value={{ authenticated, singIn, handleLogout, validaUser }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
