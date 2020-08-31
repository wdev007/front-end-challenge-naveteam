import React from 'react';

import { AuthProvider } from './hooks/auth';
import { NaversProvider } from './hooks/navers';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <NaversProvider>
        <GlobalStyles />
        <Routes />
      </NaversProvider>
    </AuthProvider>
  </>
);

export default App;
