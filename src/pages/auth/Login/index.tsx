import React from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import logo from '../../../assets/logo.svg';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="nave.rs" />
      <Input type="email" placeholder="E-mail" width={90} label="E-mail" />
      <Input type="password" placeholder="Senha" width={90} label="Senha" />
      <Button
        width={90}
        type="button"
        onClick={e => {
          console.log(e);
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
