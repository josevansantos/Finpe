import React from 'react';
import { Router } from 'react-router-dom';

import RoutesAdm from './routes';

import history from './services/history';

import { AuthProvider } from './context/AuthContext';

const App = () => (
  <div>
    <AuthProvider>
      <React.Fragment>
        <Router history={history}>
          <RoutesAdm />
        </Router>
      </React.Fragment>
    </AuthProvider>
  </div>
);

export default App;
