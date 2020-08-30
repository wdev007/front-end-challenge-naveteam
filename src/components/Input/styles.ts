import styled from 'styled-components';

import { IInput } from './index';

export const Container = styled.div<IInput>`
  width: ${props => `${props.width ? `${props.width}%` : `${280}px`}`};
`;

export const Input = styled.input`
  background: #ffffff;

  border: 1px solid #424242;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const Label = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;

  margin-bottom: 4px;
`;
