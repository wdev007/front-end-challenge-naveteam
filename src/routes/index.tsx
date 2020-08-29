import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Router from './router';

// Auth
import Login from '~/pages/auth/Login';

// App
import Home from '~/pages/app/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router component={Login} path="/" exact />
        <Router component={Home} path="/home" isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
