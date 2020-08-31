import styled from 'styled-components';
import { darken, opacify } from 'polished';

import { IButton } from './index';

export const Button = styled.button<IButton>`
  background: ${props => (props.disabled ? opacify(1, '#212121') : '#212121')};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  width: ${props => `${props.width ? `${props.width}%` : `${176}px`}`};
  height: 40px;
  color: #fff;
  border: none;

  &:hover {
    background: ${darken(0.2, '#212121')};
  }
`;
