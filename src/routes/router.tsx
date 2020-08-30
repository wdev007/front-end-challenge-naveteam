import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AppLayout from '../pages/_layouts/app';
import AuthLayout from '../pages/_layouts/auth';

interface IProps {
  component: any;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const [authenticated] = useState(false);

  if (!authenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = authenticated ? AppLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
