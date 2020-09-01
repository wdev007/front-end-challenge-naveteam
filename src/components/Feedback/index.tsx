import React from 'react';

import Button from '../Button';

import { Container, Message, Title, ContainerActions } from './styles';

interface IProps {
  feedback: 'updated' | 'deleted' | 'want_to_delete' | 'created';
  handleDelete?: any;
  handleCancel?: any;
}

const feedbacks = {
  created: {
    title: 'Naver criado',
    message: 'Naver criado com sucesso!',
    actions: false,
  },
  updated: {
    title: 'Naver atualizado',
    message: 'Naver atualizado com sucesso!',
    actions: false,
  },
  deleted: {
    title: 'Naver excluido',
    message: 'Naver excluido com sucesso!',
    actions: false,
  },
  want_to_delete: {
    title: 'Excluir Naver',
    message: 'tem certeza que deseja excluir esse Never?',
    actions: true,
  },
};

const Feedback: React.FC<IProps> = ({
  feedback,
  handleCancel,
  handleDelete,
}) => {
  return (
    <Container>
      <div>
        <Title>{feedbacks[feedback].title}</Title>
        <Message>{feedbacks[feedback].message}</Message>
      </div>
      {feedbacks[feedback].actions && (
        <ContainerActions>
          <Button type="button" invertedColor onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="button" onClick={handleDelete}>
            Excluir
          </Button>
        </ContainerActions>
      )}
    </Container>
  );
};

export default Feedback;
