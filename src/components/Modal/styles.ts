import styled from 'styled-components';

import { IModalBody } from './index';

export const ModalBody = styled.div<IModalBody>`
  width: ${props => (props.isDetail ? `${1006}px` : `${592}px`)};
  height: 503px;

  display: flex;
`;
