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
  loading: boolean;
}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }: ILogin): Promise<void> => {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      setAuthenticated(false);
      setLoading(false);
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
      const userDecode = JSON.parse(userStorage);
      setUser(userDecode);
      api.defaults.headers.common = {
        authorization: `Bearer ${userDecode?.token}`,
      };
    }
    if (authenticatedStorage) {
      setAuthenticated(JSON.parse(authenticatedStorage));
    }
  }, []);

  useEffect(() => {
    if (user?.token) {
      api.defaults.headers.common = {
        authorization: `Bearer ${user?.token}`,
      };
    }
  }, [user, authenticated]);

  const value = useMemo<IAuthContext>(
    () => ({
      authenticated,
      handleLogin,
      handleLogout,
      loading,
    }),
    [authenticated, loading]
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
