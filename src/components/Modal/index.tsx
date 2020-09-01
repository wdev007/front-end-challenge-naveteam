import React from 'react';
import 'react-responsive-modal/styles.css';

import { Modal } from 'react-responsive-modal';

import { ModalBody } from './styles';

export interface IModalBody {
  isDetail?: boolean;
  heigth?: number;
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
  heigth,
}) => {
  return (
    <Modal open={open} onClose={onCloseModal}>
      <ModalBody isDetail={isDetail} heigth={heigth}>
        {children}
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
