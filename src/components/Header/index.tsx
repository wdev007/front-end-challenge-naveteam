import React from 'react';

import { Contianer } from './styles';

import logo from '../../assets/logo.svg';

const HeaderComponent: React.FC = () => {
  return (
    <Contianer>
      <img src={logo} alt="" />
      <h3>sair</h3>
    </Contianer>
  );
};

export default HeaderComponent;
