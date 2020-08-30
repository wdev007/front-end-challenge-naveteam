import React from 'react';

import { LayoutContainer } from './styles';

const AuthLayout: React.FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default AuthLayout;
