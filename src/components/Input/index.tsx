import React from 'react';

import { Input, Container, Label } from './styles';

export interface IInput {
  width?: number;
}

interface IProps extends IInput {
  type: string;
  label: string;
  placeholder: string;
}

const InputComponent: React.FC<IProps> = ({
  type,
  placeholder,
  label,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default InputComponent;
