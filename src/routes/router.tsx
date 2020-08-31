import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'src/hooks/auth';

import AppLayout from '../pages/_layouts/app';
import AuthLayout from '../pages/_layouts/auth';

interface IProps {
  component: React.FunctionComponent | React.ClassicComponentClass;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { authenticated } = useAuth();

  if (!authenticated && isPrivate) {
    return <Redirect to="/" />;
  }
  if (authenticated && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = authenticated && isPrivate ? AppLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...{ ...props, authenticated }} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
