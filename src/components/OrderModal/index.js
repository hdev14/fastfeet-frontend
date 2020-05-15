import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ContainerModal,
  Modal,
  ModalFooter,
} from './styles';

export default function OrderModal({ data }) {
  function handleClose(e) {
    const modal = e.target.children[0];
    if (modal && modal.id === 'modal') {
      e.target.style.display = 'none';
    }
  }

  return (
    <ContainerModal onClick={handleClose}>
      <Modal id="modal">
        <div>
          <strong>Informações da encomenda</strong>
          <ul>
            <li>{data.recipient.street}</li>
            <li>{`${data.recipient.city} - ${data.recipient.state}`}</li>
            <li>{data.recipient.cep}</li>
          </ul>
        </div>

        <div>
          <strong>Datas</strong>
          <ul>
            <li><b>Retirada: </b> 25/01/2020</li>
            <li><b>Entrega: </b> 25/01/2020</li>
          </ul>
        </div>

        <ModalFooter>
          <strong>Assinatura do destinatário</strong>
          <img src={data.signature.url} alt="signature" />
        </ModalFooter>
      </Modal>
    </ContainerModal>
  );
}

OrderModal.propTypes = {
  data: PropTypes.object.isRequired,
};
