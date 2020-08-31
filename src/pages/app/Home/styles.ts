import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 125px;
`;

export const TitleHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  color: #212121;
`;

export const ContainerHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageDetail = styled.img`
  width: 50%;
`;

export const DescriptionDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  padding: 32px;
`;

export const FieldDetail = styled.div`
  height: 80px;
`;

export const TitleDetail = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000;
`;

export const SubTitleDetail = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const LabelDetail = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const ActionsContainerDetail = styled.div`
  display: flex;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  button > img {
    margin-right: 16px;
  }
`;
