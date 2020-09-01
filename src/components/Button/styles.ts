import styled from 'styled-components';
import { darken } from 'polished';

import { IButton } from './index';

export const Button = styled.button<IButton>`
  background: ${props => (props.invertedColor ? '#fff' : '#212121')};
  border: 1px solid #212121;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  width: ${props => `${props.width ? `${props.width}%` : `${176}px`}`};
  height: 40px;
  color: ${props => (props.invertedColor ? '#212121' : '#fff')};
  border: none;

  &:hover {
    background: ${props =>
      props.invertedColor ? darken(0.1, '#fff') : darken(0.2, '#212121')};
  }
`;
