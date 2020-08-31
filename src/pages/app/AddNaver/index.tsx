import React, { useState } from 'react';

import arrow from '../../../assets/arrow.svg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Form, Title, FormRow, ContainerTitle } from './styles';

interface IForm {
  name: string;
  job_role: string;
  project: string;
  birthdate: string;
  admission_date: string;
  url: string;
}

const AddNaver: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    admission_date: '',
    birthdate: '',
    job_role: '',
    name: '',
    project: '',
    url: '',
  });

  const handleClick = (event: any): void => {
    console.log(event);
  };

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm(prevState => ({ ...prevState, name: event.target.value }));
  };

  const handleChangeJobRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm(prevState => ({ ...prevState, job_role: event.target.value }));
  };

  return (
    <Container>
      <Form>
        <ContainerTitle>
          <img src={arrow} alt="" />
          <Title>Adicionar Naver</Title>
        </ContainerTitle>
        <FormRow>
          <Input
            placeholder="Nome"
            label="Nome"
            type="text"
            value={form.name}
            onChange={handleChangeName}
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
            value={form.name}
            onChange={handleChangeName}
          />
          <Input
            placeholder="Tempo de Empresa"
            label="Tempo de Empresa"
            type="text"
            value={form.job_role}
            onChange={handleChangeJobRole}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder="Projetos que participou"
            label="Projetos que participou"
            type="text"
            value={form.name}
            onChange={handleChangeName}
          />
          <Input
            placeholder="URL da foto do Naver"
            label="URL da foto do Naver"
            type="text"
            value={form.job_role}
            onChange={handleChangeJobRole}
          />
        </FormRow>
        <FormRow oneField>
          <Button type="button" onClick={handleClick}>
            Salvar
          </Button>
        </FormRow>
      </Form>
    </Container>
  );
};

export default AddNaver;
