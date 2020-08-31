import React from 'react';

import { useAuth } from 'src/hooks/auth';

import { Contianer, ButtonLogout } from './styles';

import logo from '../../assets/logo.svg';

const HeaderComponent: React.FC = () => {
  const { handleLogout } = useAuth();

  return (
    <Contianer>
      <img src={logo} alt="" />
      <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
    </Contianer>
  );
};

export default HeaderComponent;
