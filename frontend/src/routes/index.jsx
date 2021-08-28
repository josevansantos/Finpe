import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../context/AuthContext';

import UserLogin from '../pages/Login';
import CreateUser from '../components/Cadastro';
import CreateTransaction from '../components/CreateTransaction';
import Home from '../pages/Home';
import Editar from '../pages/Editar';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated, validaUser } = useContext(Context);
  validaUser();

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
}

export default function RoutesAdm() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={UserLogin} />
      <CustomRoute exact path="/create" component={CreateUser} />
      <CustomRoute exact path="/dashboard" component={Home} />{' '}
      <CustomRoute
        exact
        path="/transaction"
        component={CreateTransaction}
      ></CustomRoute>
      <CustomRoute exact path="/transaction/create">
        <Redirect to="/dashboard" />
      </CustomRoute>
      <CustomRoute exact path="/editar/:id" component={Editar} />
      <CustomRoute exact path="/apagar/:id">
        <Redirect to="/dashboard" />
      </CustomRoute>
    </Switch>
  );
}
