import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';
import { useAuth } from './auth';

export interface INaver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

interface INaversContext {
  navers: INaver[];
  loading: boolean;
}

const NaversContext = createContext<INaversContext | null>(null);

const NaversProvider: React.FC = ({ children }) => {
  const { authenticated } = useAuth();
  const [navers, setNavers] = useState<INaver[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadNavers = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data, status } = await api.get('/navers');

        if (status === 200) {
          setNavers(data);
          setLoading(false);
          console.log(data, 'my navers');
        }
      } catch {
        setLoading(false);
      }
    };
    if (authenticated) {
      loadNavers();
    }
  }, [authenticated]);

  const value = useMemo<INaversContext>(
    () => ({
      navers,
      loading,
    }),
    [navers, loading]
  );

  return (
    <NaversContext.Provider value={value}>{children}</NaversContext.Provider>
  );
};

const useNavers = (): INaversContext => {
  const context = useContext(NaversContext);

  if (!context) {
    throw new Error('useNavers must be used within a NaversProvider');
  }

  return context;
};

export { NaversProvider, useNavers };
