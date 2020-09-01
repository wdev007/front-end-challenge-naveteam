import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from 'src/services/api';
import Modal from 'src/components/Modal';
import { useNavers } from '../../../hooks/navers';

import arrow from '../../../assets/arrow.svg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Feedback from '../../../components/Feedback';

import { formatDate } from '../../../utils/formatDate';

import { Container, Form, Title, FormRow, ContainerTitle } from './styles';

interface IForm {
  name: string;
  job_role: string;
  project: string;
  birthdate: string;
  admission_date: string;
  url: string;
}

const Naver: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [form, setForm] = useState<IForm>({
    admission_date: '',
    birthdate: '',
    job_role: '',
    name: '',
    project: '',
    url: '',
  });
  const {
    handleEdit,
    handleCreate,
    visibleFeedBack,
    setVisibleFeedBack,
  } = useNavers();

  const handleClick = (_: any): void => {
    if (id) {
      handleEdit(form);
    } else {
      handleCreate(form);
    }
  };

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({ ...prevState, name: value }));
    }
  };

  const handleChangeJobRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({ ...prevState, job_role: value }));
    }
  };

  const handleChangeProject = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({ ...prevState, project: value }));
    }
  };

  const handleChangeAdmissionDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({
        ...prevState,
        admission_date: value,
      }));
    }
  };

  const handleChangeBirthdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({ ...prevState, birthdate: value }));
    }
  };

  const handleChangeUrl = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    if (value !== null) {
      setForm(prevState => ({ ...prevState, url: value }));
    }
  };

  const handleBack = (): void => {
    history.push('/home');
  };

  const handleCloseFeedBack = (): void => {
    setVisibleFeedBack({
      visible: false,
      feedback: null,
    });
  };

  useEffect(() => {
    const loadNaver = async (): Promise<void> => {
      const { data, status } = await api.get(`/navers/${id}`);

      if (status === 200) {
        setForm({
          ...data,
          birthdate: formatDate(new Date(data.birthdate)),
          admission_date: formatDate(new Date(data.admission_date)),
        });
      }
    };
    if (id) {
      loadNaver();
    }
  }, [id]);

  return (
    <Container>
      <Form>
        <ContainerTitle>
          <button type="button" onClick={() => handleBack()}>
            <img src={arrow} alt="arrow" />
          </button>
          <Title>{id ? 'Editar Naver' : 'Adicionar Naver'}</Title>
        </ContainerTitle>
        <FormRow>
          <Input
            placeholder="Nome"
            label="Nome"
            type="text"
            value={form.name}
            onChange={event => handleChangeName(event)}
          />
          <Input
            placeholder="Cargo"
            label="Cargo"
            type="text"
            value={form.job_role}
            onChange={handleChangeJobRole}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder="Idade"
            label="Idade"
            type="text"
            value={form.birthdate}
            onChange={handleChangeBirthdate}
          />
          <Input
            placeholder="Tempo de Empresa"
            label="Tempo de Empresa"
            type="text"
            value={form.admission_date}
            onChange={handleChangeAdmissionDate}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder="Projetos que participou"
            label="Projetos que participou"
            type="text"
            value={form.project}
            onChange={handleChangeProject}
          />
          <Input
            placeholder="URL da foto do Naver"
            label="URL da foto do Naver"
            type="text"
            value={form.url}
            onChange={handleChangeUrl}
          />
        </FormRow>
        <FormRow oneField>
          <Button type="button" onClick={handleClick}>
            Salvar
          </Button>
        </FormRow>
      </Form>
      <Modal open={visibleFeedBack.visible} onCloseModal={handleCloseFeedBack}>
        <Feedback feedback={visibleFeedBack.feedback || 'created'} />
      </Modal>
    </Container>
  );
};

export default Naver;
