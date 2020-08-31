import React from 'react';
import { useHistory } from 'react-router-dom';

import Buttom from 'src/components/Button';
import Card from 'src/components/Card';

import { useNavers, INaver } from 'src/hooks/navers';

import {
  Container,
  ContainerHeader,
  TitleHeader,
  ContainerList,
} from './styles';

const Home: React.FC = () => {
  const { navers } = useNavers();
  const history = useHistory();

  const handleClick = (naver: INaver): void => {
    console.log(naver);
  };

  return (
    <Container>
      <ContainerHeader>
        <TitleHeader>Navers</TitleHeader>
        <Buttom
          onClick={() => {
            history.push('/add');
          }}
          type="button"
        >
          Adicionar Naver
        </Buttom>
      </ContainerHeader>
      <ContainerList>
        {navers.map(naver => (
          <Card
            handleClick={() => handleClick(naver)}
            url={naver.url}
            title={naver.name}
            subtitle={naver.job_role}
            key={naver.id}
          />
        ))}
      </ContainerList>
    </Container>
  );
};

export default Home;
