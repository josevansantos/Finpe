import './App.css';
import React from 'react';
import UserLogin from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CreateUser from './components/Cadastro';
import CreateTransaction from './components/CreateTransaction';
import Home from './pages/Home';

import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';

const App = () => (
  <div className="App">
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/create" component={CreateUser} />
          <Route exact path="/dashboard" component={Home} />{' '}
          <Route exact path="/transaction" component={CreateTransaction} />
          <Route exact path="/cadastrar/:id" component={Cadastrar} />
          <Route exact path="/editar/:id" component={Editar} />
          <Route exact path="/apagar/:id">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  </div>
);

export default App;
