import styled from 'styled-components';

import { IButton } from './index';

export const Button = styled.button<IButton>`
  background: #212121;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  width: ${props => `${props.width ? `${props.width}%` : `${176}px`}`};
  height: 40px;
  color: #fff;
  border: none;
`;
