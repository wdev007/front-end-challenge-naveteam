import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

interface IPros {
  open: boolean;
  onCloseModal: () => any;
}

const ModalComponent: React.FC<IPros> = ({ children, open, onCloseModal }) => {
  return (
    <Modal open={open} onClose={onCloseModal}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
