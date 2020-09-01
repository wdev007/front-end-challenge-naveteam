import styled from 'styled-components';

import { IModalBody } from './index';

export const ModalBody = styled.div<IModalBody>`
  width: ${props => (props.isDetail ? `${1006}px` : `${592}px`)};
  height: ${props =>
    props.isDetail ? `${503}px` : `${props.heigth || 233}px`};

  display: flex;
`;
