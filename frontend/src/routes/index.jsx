import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../context/AuthContext';

import UserLogin from '../pages/Login';
import CreateUser from '../components/Cadastro';
import CreateTransaction from '../components/CreateTransaction';
import Home from '../pages/Home';
import Cadastrar from '../pages/Cadastrar';
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
      <CustomRoute exact isPrivate path="/dashboard" component={Home} />{' '}
      <CustomRoute
        exact
        isPrivate
        path="/transaction"
        component={CreateTransaction}
      />
      <CustomRoute
        exact
        isPrivate
        path="/cadastrar/:id"
        component={Cadastrar}
      />
      <CustomRoute exact isPrivate path="/editar/:id" component={Editar} />
      <CustomRoute exact isPrivate path="/apagar/:id">
        <Redirect to="/dashboard" />
      </CustomRoute>
    </Switch>
  );
}
