import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Questao from '../pages/Questao';
import Users from '../pages/Users';
import store from '../redux/store';

const AppRoutes: React.FC = () => (
  <Provider store={store}>
    <Dashboard>
      <Switch>
        <Route component={Questao} path="/questoes" />
        <Route component={Users} path="/users" />
        <Route component={Home} path="/" />
      </Switch>
    </Dashboard>
  </Provider>
);

export default AppRoutes;
