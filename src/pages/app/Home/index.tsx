import React from 'react';

import Buttom from 'src/components/Button';
import Card from 'src/components/Card';

import { useNavers } from 'src/hooks/navers';

import {
  Container,
  ContainerHeader,
  TitleHeader,
  ContainerList,
} from './styles';

const Home: React.FC = () => {
  const { navers } = useNavers();

  return (
    <Container>
      <ContainerHeader>
        <TitleHeader>Navers</TitleHeader>
        <Buttom
          onClick={() => {
            console.log('');
          }}
          type="button"
        >
          Adicionar Naver
        </Buttom>
      </ContainerHeader>
      <ContainerList>
        {navers.map(naver => (
          <Card photoUrl={naver.url} />
        ))}
      </ContainerList>
    </Container>
  );
};

export default Home;
