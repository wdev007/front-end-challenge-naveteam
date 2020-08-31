import styled from 'styled-components';

interface IFormRow {
  oneField?: boolean;
}

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 54px;

  img {
    margin-right: 22px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212121;
`;

export const Form = styled.div`
  width: 600px;

  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div<IFormRow>`
  display: flex;
  justify-content: ${props => (props.oneField ? 'flex-end' : 'space-between')};
  margin-bottom: 50px;
`;
