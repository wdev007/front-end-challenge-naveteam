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
  id?: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id?: string;
  project: string;
  birthdate: string;
  url: string;
}

interface INaversContext {
  navers: INaver[];
  loading: boolean;
  handleEdit: (naver: INaver) => Promise<void>;
  handleCreate: (naver: INaver) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
  visibleFeedBack: IFeedbacks;
  setVisibleFeedBack: React.Dispatch<React.SetStateAction<IFeedbacks>>;
}

interface IFeedbacks {
  visible: boolean;
  feedback: 'updated' | 'deleted' | 'want_to_delete' | 'created' | null;
  id?: string;
}

const NaversContext = createContext<INaversContext | null>(null);

const NaversProvider: React.FC = ({ children }) => {
  const { authenticated } = useAuth();
  const [navers, setNavers] = useState<INaver[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleFeedBack, setVisibleFeedBack] = useState<IFeedbacks>({
    visible: false,
    feedback: null,
    id: '',
  });

  const loadNavers = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, status } = await api.get('/navers');

      if (status === 200) {
        setNavers(data);
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  };

  const handleEdit = async (naver: INaver): Promise<void> => {
    try {
      const { status } = await api.put(`/navers/${naver.id}`, {
        name: naver.name,
        admission_date: naver.admission_date,
        job_role: naver.job_role,
        project: naver.project,
        birthdate: naver.birthdate,
        url: naver.url,
      });
      if (status === 200) {
        setVisibleFeedBack({
          visible: true,
          feedback: 'updated',
        });
        setLoading(false);
        loadNavers();
      }
    } catch {
      setLoading(false);
    }
  };

  const handleCreate = async (naver: INaver): Promise<void> => {
    try {
      const { status } = await api.post('/navers', {
        ...naver,
      });

      if (status === 200) {
        setVisibleFeedBack({
          visible: true,
          feedback: 'created',
        });
        setLoading(false);
        loadNavers();
      }
    } catch {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      const { status } = await api.delete(`/navers/${id}`);

      if (status === 200) {
        setVisibleFeedBack({
          visible: true,
          feedback: 'deleted',
        });
        setLoading(false);
        loadNavers();
      }
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      loadNavers();
    }
  }, [authenticated]);

  const value = useMemo<INaversContext>(
    () => ({
      navers,
      loading,
      handleEdit,
      handleCreate,
      visibleFeedBack,
      setVisibleFeedBack,
      handleDelete,
    }),
    [navers, loading, visibleFeedBack]
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
