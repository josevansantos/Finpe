import React, { createContext, useEffect, useState } from 'react';
import api from '../config';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const getLogin = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }
    };
    getLogin();
  }, []);

  const validaUser = async () => {
    const valueToken = localStorage.getItem('token');

    const headers = {
      headers: {
        Authorization: 'Bearer ' + valueToken,
      },
    };

    api
      .get('/login/token', headers)
      .then(() => {
        return true;
      })
      .catch((err) => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        return false;
      });
  };

  function singIn(sit) {
    setAuthenticated(sit);
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
