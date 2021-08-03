import './style.css';
import React from 'react';
import UserLogin from '../Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CreateUser from '../../components/Cadastro';
import CreateTransaction from '../../components/CreateTransaction';
import Home from '../Home';

const App = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/create" component={CreateUser} />
        <Route exact path="/app" component={Home} />{' '}
        {/* criar um componente Home e encapsular o header e transactions */}
        <Route exact path="/transaction" component={CreateTransaction} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
