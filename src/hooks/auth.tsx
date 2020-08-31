import React, { createContext, useMemo, useState, useContext } from 'react';

import api from '../services/api';

interface ILogin {
  email: string;
  password: string;
}

interface IAuthContext {
  authenticated: boolean;
  handleLogin: (data: ILogin) => Promise<void>;
}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const handleLogin = async ({ email, password }: ILogin): Promise<void> => {
    try {
      const { status } = await api.post('/users/login', {
        email,
        password,
      });

      if (status === 200) {
        setAuthenticated(true);
      }
    } catch (error) {
      setAuthenticated(false);
    }
  };

  const value = useMemo<IAuthContext>(
    () => ({
      authenticated,
      handleLogin,
    }),
    [authenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
