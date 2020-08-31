import React, { useState, useRef, useEffect } from 'react';

import logo from '../../../assets/logo.svg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useAuth } from '../../../hooks/auth';

import { Container } from './styles';

const Login: React.FC = () => {
  const isMountedRef = useRef(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const onClick = async (): Promise<void> => {
    await handleLogin({
      email,
      password,
    });

    if (isMountedRef.current) {
      setEmail('');
      setPassword('');
    }
  };

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );
  return (
    <Container>
      <img src={logo} alt="nave.rs" />
      <Input
        type="email"
        placeholder="E-mail"
        width={90}
        label="E-mail"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        type="password"
        placeholder="Senha"
        width={90}
        label="Senha"
        value={password}
        onChange={onChangePassword}
      />
      <Button width={90} type="button" onClick={onClick}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
