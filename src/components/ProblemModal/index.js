import React from 'react';

import {
  ProblemModalContainer,
  Modal,
} from './styles';

export default function ProblemModal() {
  function handleClose(e) {
    const modal = e.target.firstChild;
    if (modal && modal.id === 'modal') {
      e.target.style.display = 'none';
    }
  }

  return (
    <ProblemModalContainer onClick={handleClose}>
      <Modal id="modal">
        <strong>visualizar problema</strong>
        <p id="throuble-modal-content">
          Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
        </p>
      </Modal>
    </ProblemModalContainer>
  );
}
