import React from 'react';

import { feedbacks } from 'src/utils/feedbacks';
import Button from '../Button';

import { Container, Message, Title, ContainerActions } from './styles';

interface IProps {
  feedback: 'updated' | 'deleted' | 'want_to_delete' | 'created';
  handleDelete?: any;
  handleCancel?: any;
}

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
