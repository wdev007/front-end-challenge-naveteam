import React from 'react';

import { CardContainer, CardMedia } from './styles';

export interface IProps {
  photoUrl: string;
}

const CardComponent: React.FC<IProps> = ({ photoUrl }) => {
  return (
    <CardContainer>
      <CardMedia src={photoUrl} alt="" />
    </CardContainer>
  );
};

export default CardComponent;
