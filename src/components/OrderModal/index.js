import React from 'react';

import {
  ContainerModal,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './styles';

import signature from '../../assets/signature.png';

export default function OrderModal() {
  function handleClose(e) {
    const modal = e.target.children[0];

    if (modal) {
      e.target.style.display = 'none';
      modal.style.display = 'none';
    }
  }

  return (
    <ContainerModal onClick={handleClose}>
      <Modal>
        <ModalHeader>
          <strong>Informações da encomenda</strong>
          <ul>
            <li>Rua Beethoven, 1729</li>
            <li>Diadema - SP</li>
            <li>09960-580</li>
          </ul>
        </ModalHeader>

        <ModalBody>
          <strong>Datas</strong>
          <ul>
            <li><b>Retirada: </b> 25/01/2020</li>
            <li><b>Entrega: </b> 25/01/2020</li>
          </ul>
        </ModalBody>

        <ModalFooter>
          <strong>Assinatura do destinatário</strong>
          <img src={signature} alt="signature" />
        </ModalFooter>
      </Modal>
    </ContainerModal>
  );
}
