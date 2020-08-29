import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/app';
import AppLayout from '~/pages/_layouts/auth';

interface IProps {
  component: React.FunctionComponent | React.ComponentClass;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const [authenticated] = useState(true);

  const Layout = authenticated ? AppLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
