import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import Buttom from 'src/components/Button';
import Card from 'src/components/Card';
import Modal from 'src/components/Modal';

import { useNavers, INaver } from 'src/hooks/navers';

import trash from '../../../assets/trash.svg';
import pencil from '../../../assets/pencil.svg';

import { calculateDate, calculateAge } from '../../../utils/calculateDate';

import {
  Container,
  ContainerHeader,
  TitleHeader,
  ContainerList,
  ImageDetail,
  DescriptionDetail,
  FieldDetail,
  TitleDetail,
  SubTitleDetail,
  LabelDetail,
  ActionsContainerDetail,
} from './styles';

const Home: React.FC = () => {
  const { navers } = useNavers();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [currentNaver, setCurrentNaver] = useState<INaver | null>(null);
  const birthdate = useMemo(() => calculateAge(currentNaver?.birthdate || ''), [
    currentNaver,
  ]);
  const admission_date = useMemo(
    () => calculateDate(currentNaver?.admission_date || ''),
    [currentNaver]
  );

  const handleClick = (naver: INaver): void => {
    setCurrentNaver(naver);
    setVisible(true);
  };

  const onCloseModal = (): void => {
    setVisible(false);
  };

  const handleEdit = (id: string): void => {
    console.log(id, 'edit');
  };

  const handleDelete = (id: string): void => {
    console.log(id, 'delete');
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
      <Modal open={visible} onCloseModal={onCloseModal} isDetail>
        <>
          <ImageDetail src={currentNaver?.url} />
          <DescriptionDetail>
            <div>
              <FieldDetail>
                <TitleDetail>{currentNaver?.name}</TitleDetail>
                <SubTitleDetail>{currentNaver?.job_role}</SubTitleDetail>
              </FieldDetail>
              <FieldDetail>
                <LabelDetail>Idade</LabelDetail>
                <SubTitleDetail>{birthdate}</SubTitleDetail>
              </FieldDetail>
              <FieldDetail>
                <LabelDetail>Tempo de empresa</LabelDetail>
                <SubTitleDetail>{admission_date}</SubTitleDetail>
              </FieldDetail>
              <FieldDetail>
                <LabelDetail>Projetos que participou</LabelDetail>
                <SubTitleDetail>{currentNaver?.project}</SubTitleDetail>
              </FieldDetail>
            </div>
            <ActionsContainerDetail>
              <button
                type="button"
                onClick={() => handleDelete(currentNaver?.id || '')}
              >
                <img src={trash} alt="trash" />
              </button>
              <button
                type="button"
                onClick={() => handleEdit(currentNaver?.id || '')}
              >
                <img src={pencil} alt="pencil" />
              </button>
            </ActionsContainerDetail>
          </DescriptionDetail>
        </>
      </Modal>
    </Container>
  );
};

export default Home;
