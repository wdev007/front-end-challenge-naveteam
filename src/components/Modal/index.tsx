import React from 'react';
import 'react-responsive-modal/styles.css';

import { Modal } from 'react-responsive-modal';

import { ModalBody } from './styles';

export interface IModalBody {
  isDetail?: boolean;
}

interface IPros extends IModalBody {
  open: boolean;
  onCloseModal: () => any;
}

const ModalComponent: React.FC<IPros> = ({
  children,
  open,
  onCloseModal,
  isDetail,
}) => {
  return (
    <Modal open={open} onClose={onCloseModal}>
      <ModalBody isDetail={isDetail}>{children}</ModalBody>
    </Modal>
  );
};

export default ModalComponent;
