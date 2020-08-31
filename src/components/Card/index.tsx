import React, { MouseEvent } from 'react';

import { INaver } from 'src/hooks/navers';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';

import {
  CardContainer,
  CardMedia,
  CardDescription,
  CardSubTitle,
  CardTitle,
  CardActions,
} from './styles';

export interface IProps {
  url: string;
  title: string;
  subtitle: string;
  handleClick: (naver: any) => void;
}

const CardComponent: React.FC<IProps> = ({
  url,
  title,
  subtitle,
  handleClick,
}) => {
  return (
    <CardContainer onClick={handleClick}>
      <CardMedia src={url} alt={title} />
      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subtitle}</CardSubTitle>
      </CardDescription>
      <CardActions>
        <img src={trash} alt="trash" />
        <img src={pencil} alt="pencil" />
      </CardActions>
    </CardContainer>
  );
};

export default CardComponent;
