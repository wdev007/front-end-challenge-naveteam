import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  color: #212121;
`;

export const Message = styled.h4`
  margin-top: 24px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;

  color: #212121;
`;

export const ContainerActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 24px;
  }
`;
