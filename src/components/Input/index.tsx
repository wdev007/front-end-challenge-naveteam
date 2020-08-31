import React from 'react';

import { Input, Container, Label } from './styles';

export interface IInput {
  width?: number;
}

interface IProps extends IInput {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<IProps> = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        {...rest}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

export default InputComponent;
