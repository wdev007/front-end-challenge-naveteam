import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Router from './router';

// Auth
import Login from '../pages/auth/Login';

// App
import Home from '../pages/app/Home';
import Naver from '../pages/app/Naver';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router component={Login} path="/" exact />
        <Router component={Home} path="/home" isPrivate />
        <Router component={Naver} path="/naver/:id?" isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
