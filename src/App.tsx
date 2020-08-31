import React from 'react';

import { AuthProvider } from './hooks/auth';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  </>
);

export default App;
