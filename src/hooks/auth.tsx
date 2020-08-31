import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';

interface ILogin {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  id: string;
  token: string;
}

interface IAuthContext {
  authenticated: boolean;
  handleLogin: (data: ILogin) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = async ({ email, password }: ILogin): Promise<void> => {
    try {
      const { status, data } = await api.post<IUser>('/users/login', {
        email,
        password,
      });

      if (status === 200) {
        setUser(data);
        setAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('auth', JSON.stringify(true));
      }
    } catch (error) {
      setAuthenticated(false);
    }
  };

  const handleLogout = (): void => {
    setAuthenticated(false);
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const authenticatedStorage = localStorage.getItem('auth');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
    if (authenticatedStorage) {
      setAuthenticated(JSON.parse(authenticatedStorage));
    }
  }, []);

  useEffect(() => {
    api.defaults.headers.common = {
      authorization: `Bearer ${user?.token}`,
    };
    // localStorage.setItem('user', JSON.stringify(user));
    // localStorage.setItem('auth', JSON.stringify(authenticated));
  }, [user, authenticated]);

  const value = useMemo<IAuthContext>(
    () => ({
      authenticated,
      handleLogin,
      handleLogout,
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
