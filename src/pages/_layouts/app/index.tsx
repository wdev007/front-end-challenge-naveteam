import React from 'react';

import Header from '../../../components/Header';

import { LayoutContainer } from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default AppLayout;
